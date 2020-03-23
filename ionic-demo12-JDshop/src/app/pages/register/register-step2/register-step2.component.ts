import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-step2',
  templateUrl: './register-step2.component.html',
  styleUrls: ['./register-step2.component.scss'],
})
export class RegisterStep2Component {

  constructor(public navController: NavController) { }

  goNextStep() {
    this.navController.navigateForward('/register/step3');
  }

  goBackStep() {
    this.navController.navigateBack('/register/step1');
  }
}
