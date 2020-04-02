import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService, CommonService } from '../../../services';

@Component({
  selector: 'app-register-step3',
  templateUrl: './register-step3.component.html',
  styleUrls: ['./register-step3.component.scss'],
})
export class RegisterStep3Component {
  tel;
  code;
  password = '';
  confirm = '';

  constructor(public navController: NavController, public storageService: StorageService, public commonService: CommonService) {
    this.tel = this.storageService.get('tel');
    this.code = this.storageService.get('code');
  }

  doRegister() {
    if (this.password != this.confirm) {
      alert('Two passwords are not same.');
    } else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(this.password))) {
      alert('Password format is not correct..');
    } else {
      this.commonService.ajaxPost('api/register', { tel: this.tel, code: this.code, password: this.password }).then((response: any) => {
        console.log(response);
        this.storageService.set('userinfo', response.userinfo[0]);
        this.navController.navigateRoot('/tabs/tab4');
      });
    }
  }

}
