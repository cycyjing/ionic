import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    public navController: NavController,
    public router: Router,
    public commonService: CommonService,
    public storageService: StorageService,
    public eventEmitterService: EventEmitterService) { }

  goBack() {
    this.navController.navigateBack('/tabs/tab4');
  }

  doLogin() {
    if (this.user.username == '') {
      alert('Username is required');
    } else if (this.user.password.length < 6) {
      alert('Password is less than 8');
    } else {
      this.commonService.ajaxPost('api/doLogin', {
        username: this.user.username,
        password: this.user.password
      }).then((response: any) => {
        console.log(response);
        if (response.success) {
          this.storageService.set('userinfo', response.userinfo[0]);
          this.eventEmitterService.event.emit('userAction');
          this.router.navigate(['/tabs/tab4']);
        } else {
          alert('Login Fail! ' + response.message);
          // this.user = {
          //   username: '',
          //   password: ''
          // };
        }
      });
    }
  }
}
