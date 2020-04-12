import { Component } from '@angular/core';
import { StorageService, CommonService } from '../services';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // list: any[] = [];
  cartList: any[] = [];
  config: any = {};
  sum: number = 0;

  constructor(
    public storageService: StorageService,
    public commonService: CommonService) {
    this.config = commonService.config;
    this.getCartData();
  }

  ionViewDidEnter() {
    this.getCartData();
  }

  getCartData() {
    const cartList = this.storageService.get('cart');
    if (cartList && cartList.length > 0) {
      this.cartList = cartList;
    }
    this.getSumPrice();
  }

  getSumPrice() {
    const cartList = this.storageService.get('cart');
    if (cartList && cartList.length > 0) {
      for (const product of cartList) {
        this.sum += parseInt(product.product_price);
      }
    }
  }

}
