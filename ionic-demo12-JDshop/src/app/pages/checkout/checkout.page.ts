import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService, StorageService, CartService } from '../../services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  config: any = {};
  userinfo: any = {};
  checkoutList: any[] = [];
  subtotol: number = 0;
  discount: number = 5;
  shipping: number = 0;
  sumPrice: number = 0;

  constructor(
    public navController: NavController,
    public commonService: CommonService,
    public storageService: StorageService,
    public cartService: CartService) {
    this.config = commonService.config;
    this.userinfo = storageService.get('userinfo');

    let checkoutList = storageService.get('checkout');
    if (checkoutList && checkoutList.length > 0) {
      this.checkoutList = checkoutList;
    }

    this.subtotol = cartService.getSelectedSumPrice(this.checkoutList);
    this.sumPrice = this.subtotol - this.discount + this.shipping;
  }

  goBack() {
    this.navController.back();
  }
}
