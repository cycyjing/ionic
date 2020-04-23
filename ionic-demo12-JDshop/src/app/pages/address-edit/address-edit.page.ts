import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { CommonService, StorageService } from '../../services';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.page.html',
  styleUrls: ['./address-edit.page.scss'],
})
export class AddressEditPage {
  address: any = {};
  userinfo: any = {};

  constructor(
    public activatedRoute: ActivatedRoute,
    public navController: NavController,
    public toastController: ToastController,
    public commonService: CommonService,
    public storageService: StorageService
  ) {
    activatedRoute.queryParams.subscribe((data) => {
      // data is readonly
      this.address = JSON.parse(JSON.stringify(data));
    });
    this.userinfo = storageService.get('userinfo');
  }

  goBack() {
    this.navController.back();
  }

  editAddress() {
    const sign = this.commonService.createSign({
      uid: this.userinfo._id,
      salt: this.userinfo.salt,
      id: this.address._id,
      name: this.address.name,
      phone: this.address.phone,
      address: this.address.address
    });
    this.commonService.ajaxPost('api/editAddress', {
      uid: this.userinfo._id,
      id: this.address._id,
      name: this.address.name,
      phone: this.address.phone,
      address: this.address.address,
      sign
    }).then((response: any) => {
      if (response.success) {
        this.goBack();
      } else {
        this.showToast('Fail!' + response.message);
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
