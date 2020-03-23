import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-step3',
  templateUrl: './register-step3.component.html',
  styleUrls: ['./register-step3.component.scss'],
})
export class RegisterStep3Component {

  constructor(public navController: NavController) { }

  goBackStep() {
    this.navController.navigateBack('/register/step2');
  }

}
