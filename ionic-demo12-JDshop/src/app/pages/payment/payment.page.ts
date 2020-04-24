import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {
  payway = 'alipay';

  constructor(public navController: NavController) { }

  goBack() {
    this.navController.back();
  }

  doPay() {
    console.log(this.payway)
  }

}
