import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
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
  defaultAddress: any = {};

  constructor(
    public navController: NavController,
    public toastController: ToastController,
    public commonService: CommonService,
    public storageService: StorageService,
    public cartService: CartService) {
    this.config = commonService.config;
  }

  ionViewDidEnter() {
    const userinfo = this.storageService.get('userinfo');
    if (userinfo && userinfo.username) {
      this.userinfo = userinfo;
      this.getDefaultAddress();
    } else {
      this.userinfo = '';
    }

    const checkoutList = this.storageService.get('checkout');
    if (checkoutList && checkoutList.length > 0) {
      this.checkoutList = checkoutList;
    }

    this.subtotol = this.cartService.getSelectedSumPrice(this.checkoutList);
    this.sumPrice = this.subtotol - this.discount + this.shipping;
  }

  goBack() {
    this.navController.back();
  }

  getDefaultAddress() {
    const sign = this.commonService.createSign({
      uid: this.userinfo._id,
      salt: this.userinfo.salt
    });
    console.log(sign);
    this.commonService.ajaxGet('api/oneAddressList?uid=' + this.userinfo._id + '&sign=' + sign).then((data: any) => {
      if (data.success) {
        this.defaultAddress = data.result[0];
      } else {
        this.showToast('Fail! ' + data.message);
      }
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      cssClass: 'toast-red'
    });
    toast.present();
  }

}
