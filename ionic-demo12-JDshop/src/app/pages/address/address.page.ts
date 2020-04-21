import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CommonService, StorageService } from '../../services';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage {
  userinfo: any = {};
  addressList: any[] = [];

  constructor(
    public navController: NavController,
    public toastController: ToastController,
    public commonService: CommonService,
    public storageService: StorageService) {
    const userinfo = storageService.get('userinfo');
    if (userinfo && userinfo.username) {
      this.userinfo = userinfo;
    } else {
      navController.navigateForward('/login');
    }
  }

  ionViewDidEnter() {
    this.getAddressesData();
  }

  goBack() {
    this.navController.back();
  }

  getAddressesData() {
    const sign = this.commonService.createSign({
      uid: this.userinfo._id,
      salt: this.userinfo.salt
    });
    this.commonService.ajaxGet('api/addressList?uid=' + this.userinfo._id + '&sign=' + sign).then((data: any) => {
      console.log(data.result);
      this.addressList = data.result;
    });
  }

  changeDefaultAddress(id) {
    const sign = this.commonService.createSign({
      uid: this.userinfo._id,
      salt: this.userinfo.salt,
      id
    });

    this.commonService.ajaxPost('api/changeDefaultAddress', {
      uid: this.userinfo._id,
      id,
      sign
    }).then((response: any) => {
      if (response.success) {
        this.goBack();
      } else {
        this.showToast('Fail! ' + response.message);
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
