import { Component } from '@angular/core';
import { StorageService, CommonService, CartService } from '../services';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  cartList: any[] = [];
  config: any = {};
  sum: number = 0;

  constructor(
    public storageService: StorageService,
    public commonService: CommonService,
    public cartService: CartService) {
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
    this.sum = this.cartService.getSumPrice(this.cartList);
  }

  changeCheckbox() {
    this.sum = this.cartService.getSumPrice(this.cartList);
  }

  decreaseCount(item) {
    if (item.product_count < 2) {
      item.product_count = 2;
    }
    item.product_count--;
    this.sum = this.cartService.getSumPrice(this.cartList);
  }

  increaseCount(item) {
    if (item.product_count < 0) {
      item.product_count = 0;
    }
    item.product_count++;
    this.sum = this.cartService.getSumPrice(this.cartList);
  }



}
