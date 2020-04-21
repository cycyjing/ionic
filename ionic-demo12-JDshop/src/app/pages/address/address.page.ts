import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
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

}
