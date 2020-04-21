import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService, CommonService, EventEmitterService } from '../../../services';

@Component({
  selector: 'app-register-step3',
  templateUrl: './register-step3.component.html',
  styleUrls: ['./register-step3.component.scss'],
})
export class RegisterStep3Component {
  tel = '';
  code = '';
  password = '';
  confirm = '';

  constructor(
    public navController: NavController,
    public toastController: ToastController,
    public storageService: StorageService,
    public commonService: CommonService,
    public eventEmitterService: EventEmitterService) {
    this.tel = this.storageService.get('tel');
    this.code = this.storageService.get('code');
  }

  doRegister() {
    if (this.password != this.confirm) {
      this.showToast('Two passwords are not same!');
    // } else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(this.password))) {
    } else if (!(/^\d{6,20}$/.test(this.password))) { // TODO
      // because of API, password is only set as 123456 can be login
      this.showToast('Password format is not correct!');
    } else {
      this.commonService.ajaxPost('api/register', {
        tel: this.tel,
        code: this.code,
        password: this.password
      }).then((response: any) => {
        console.log(response);
        if (response.success) {
          this.storageService.set('userinfo', response.userinfo[0]);
          this.eventEmitterService.event.emit('userAction');
          this.storageService.remove('tel');
          this.storageService.remove('code');
          // this.navController.navigateRoot('/tabs/tab4');
          this.navController.navigateRoot('/login');
        } else {
          this.showToast('Register Fail!' + response.message);
        }
      });
    }
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      cssClass: 'toast-red'
    });
    toast.present();
  }

}
