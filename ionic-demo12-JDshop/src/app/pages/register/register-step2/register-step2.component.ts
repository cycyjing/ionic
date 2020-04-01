import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService, StorageService } from '../../../services';

@Component({
  selector: 'app-register-step2',
  templateUrl: './register-step2.component.html',
  styleUrls: ['./register-step2.component.scss'],
})
export class RegisterStep2Component implements OnInit {
  sendCodeBtn: boolean = false;
  timer: number = 5;
  tel;

  constructor(public navController: NavController, public commonService: CommonService, public storageService: StorageService) {
    this.tel = storageService.get('tel');
  }

  ngOnInit(): void {
    this.doTimer();
  }

  goNextStep() {
    this.navController.navigateForward('/register/step3');
  }

  goBackStep() {
    this.navController.navigateBack('/register/step1');
  }

  doTimer() {
    let timer = setInterval(() => {
      this.timer--;
      if (this.timer == 0) {
        this.sendCodeBtn = true;
        clearInterval(timer);
      }
    }, 1000);
  }

  sendCode() {
    this.commonService.ajaxPost('api/sendCode', { tel: this.tel }).then((response: any) => {
      console.log(response);
      if (response.success) {
        alert('Success!');
        this.doTimer();
        this.sendCodeBtn = false;
        this.timer = 5;
      } else {
        alert('Send Fail' + response.message);
      }
    });
  }
}
