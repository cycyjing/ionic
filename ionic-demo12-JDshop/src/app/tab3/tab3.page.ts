import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService, CommonService, CartService } from '../services';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  cartList: any[] = [];
  config: any = {};
  sumPrice: number = 0; // total price of selected products
  isSelectAll: boolean = false;
  isEdit: boolean = true; // is show edit button

  constructor(
    public navController: NavController,
    public storageService: StorageService,
    public commonService: CommonService,
    public cartService: CartService) {
    this.config = commonService.config;
  }

  ionViewDidEnter() {
    this.getCartData();
    this.isSelectAllFunction();
  }

  // leave page save cartList info
  ionViewDidLeave() {
    this.storageService.set('cart', this.cartList);
  }

  goBack() {
    this.navController.back();
  }

  getCartData() {
    const cartList = this.storageService.get('cart');
    if (cartList && cartList.length > 0) {
      this.cartList = cartList;
    }
    this.sumPrice = this.cartService.getSumPrice(this.cartList);
  }

  // when list checkbox checked or not
  changeCheckbox() {
    // change total price
    this.sumPrice = this.cartService.getSumPrice(this.cartList);
    // 'Select All' button status
    this.isSelectAllFunction();
  }

  decreaseCount(item) {
    if (item.product_count < 2) {
      item.product_count = 2;
    }
    item.product_count--;
    this.sumPrice = this.cartService.getSumPrice(this.cartList);
  }

  increaseCount(item) {
    if (item.product_count < 0) {
      item.product_count = 0;
    }
    item.product_count++;
    this.sumPrice = this.cartService.getSumPrice(this.cartList);
  }

  // whether to choose all when click product item
  isSelectAllFunction() {
    if (this.cartService.getSelectedProductsLength(this.cartList) == this.cartList.length) {
      this.isSelectAll = true;
    } else {
      this.isSelectAll = false;
    }
  }

  // click 'Select All' button to choose all or not
  selectAllButtonStatus() {
    for (const item of this.cartList) {
      item.checked = this.isSelectAll;
    }
  }

  // delete selected products
  doDelete() {
    let notSelectedProducts = [];
    for (const product of this.cartList) {
      if (!product.checked) {
        notSelectedProducts.push(product);
      }
    }
    this.cartList = notSelectedProducts;
    this.storageService.set('cart', this.cartList);
  }

  goCheckout() {
    let selectedProducts = [];
    let notSelectedProducts = [];
    for (const product of this.cartList) {
      if (product.checked) {
        selectedProducts.push(product);
      } else {
        notSelectedProducts.push(product);
      }
    }
    this.cartList = notSelectedProducts;
    this.storageService.set('cart', this.cartList);
    this.navController.navigateForward('/checkout');
  }

}
