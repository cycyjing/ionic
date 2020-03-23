import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-step1',
  templateUrl: './register-step1.component.html',
  styleUrls: ['./register-step1.component.scss'],
})
export class RegisterStep1Component {

  constructor(public navController: NavController) { }

  goNextStep() {
    this.navController.navigateForward('/register/step2');
  }
}
