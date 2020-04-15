import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService, StorageService, EventEmitterService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    username: '',
    password: ''
  };

  constructor(
    public router: Router,
    public navController: NavController,
    public toastController: ToastController,
    public commonService: CommonService,
    public storageService: StorageService,
    public eventEmitterService: EventEmitterService) { }

  goBack() {
    this.navController.navigateBack('/tabs/tab4');
  }

  doLogin() {
    if (this.user.username == '') {
      this.showToast('Username is required.');
    } else if (this.user.password.length < 6) {
      this.showToast('Password is less than 6');
    } else {
      this.commonService.ajaxPost('api/doLogin', {
        username: this.user.username,
        password: this.user.password
      }).then((response: any) => {
        if (response.success) {
          this.storageService.set('userinfo', response.userinfo[0]);
          this.eventEmitterService.event.emit('userAction');
          this.router.navigate(['/tabs/tab4']);
        } else {
          this.showToast('Login Fail! ' + response.message);
        }
      });
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
