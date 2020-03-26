import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterStep1 } from '../../../config/register-step1-config';

@Component({
  selector: 'app-register-step1',
  templateUrl: './register-step1.component.html',
  styleUrls: ['./register-step1.component.scss'],
})
export class RegisterStep1Component {
  COUNTRY_CODE = RegisterStep1.COUNTRY_CODE;

  constructor(public navController: NavController) { }

  goNextStep() {
    this.navController.navigateForward('/register/step2');
  }
}
