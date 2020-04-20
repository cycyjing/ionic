import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.page.html',
  styleUrls: ['./address-add.page.scss'],
})
export class AddressAddPage {

  constructor(public navController: NavController) { }

  goBack() {
    this.navController.back();
  }

}
