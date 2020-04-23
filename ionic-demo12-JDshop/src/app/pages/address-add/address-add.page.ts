import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CommonService, StorageService } from '../../services';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.page.html',
  styleUrls: ['./address-add.page.scss'],
})
export class AddressAddPage {
  userinfo: any = {};
  address = {
    name: '',
    phone: '',
    address: ''
  };

  constructor(
    public navController: NavController,
    public toastController: ToastController,
    public commonService: CommonService,
    public storageService: StorageService) {
      this.userinfo = storageService.get('userinfo');
  }

  goBack() {
    this.navController.back();
  }

  addAddress() {
    // TODO: conditions
    if (this.address.name || this.address.phone || this.address.address) {
      const sign = this.commonService.createSign({
        uid: this.userinfo._id,
        salt: this.userinfo.salt,
        name: this.address.name,
        phone: this.address.phone,
        address: this.address.address
      });

      this.commonService.ajaxPost('api/addAddress', {
        uid: this.userinfo._id,
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
    } else {
      this.showToast('Please enter information!');
    }

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
