import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { RegisterStep1 } from '../../../config';
import { CommonService, StorageService } from '../../../services';

@Component({
  selector: 'app-register-step1',
  templateUrl: './register-step1.component.html',
  styleUrls: ['./register-step1.component.scss'],
})
export class RegisterStep1Component {
  COUNTRY_CODE = RegisterStep1.COUNTRY_CODE;
  tel;

  constructor(
    public navController: NavController,
    public toastController: ToastController,
    public commonService: CommonService,
    public storageService: StorageService) { }

  goNextStep() {
    if (/^\d{8,11}$/.test(this.tel)) {
      this.commonService.ajaxPost('api/sendCode', { tel: this.tel }).then((response: any) => {
        console.log(response);

        if (response.success) {
          this.storageService.set('tel', this.tel);

          this.navController.navigateForward('/register/step2');
        } else {
          this.showToast('Send code fail ' + response.message);
        }
      });
    } else {
      this.showToast('Format is not correct');
    }
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toast'
    });
    toast.present();
  }
}
