import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
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
  returnUrl = '/tabs/tab4';

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public navController: NavController,
    public toastController: ToastController,
    public commonService: CommonService,
    public storageService: StorageService,
    public eventEmitterService: EventEmitterService) {
    activatedRoute.queryParams.subscribe((response) => {
      console.log(response.returnUrl);
      if (response && response.returnUrl) {
        this.returnUrl = response.returnUrl;
      }
    });
  }

  goBack() {

    this.navController.navigateBack(this.returnUrl);
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
          this.router.navigate([this.returnUrl]);
        } else {
          this.showToast('Login Fail! ' + response.message);
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
