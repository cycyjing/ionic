import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService, StorageService } from '../../services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  config: any = {};
  userinfo: any = {};
  checkoutList: any[] = [];
  sumPrice: number = 0;

  constructor(
    public navController: NavController,
    public commonService: CommonService,
    public storageService: StorageService) {
    this.config = commonService.config;
    this.userinfo = storageService.get('userinfo');

    let checkoutList = storageService.get('checkout');
    if (checkoutList && checkoutList.length > 0) {
      this.checkoutList = checkoutList;
    }
  }

  goBack() {
    this.navController.back();
  }
}
