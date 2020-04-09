import { Component } from '@angular/core';
import { PickerController, NavController } from '@ionic/angular';
import { StorageService, EventEmitterService } from '../../services';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage {
  user = {
    avatar: 'assets/user.png',
    username: 'username',
    gender: 'Female',
    birth: '1990-01-01'
  };
  max = {
    year: '',
    month: '',
    day: ''
  };

  constructor(
    public pickerController: PickerController,
    public navController: NavController,
    public storageService: StorageService,
    public eventEmitterService: EventEmitterService) {
    const nowDate = new Date();
    this.max.year = nowDate.getFullYear() + '';
    const m = nowDate.getMonth() + 1;
    const d = nowDate.getDate();
    if (m < 10) {
      this.max.month = '0' + m;
    }
    if (d < 10) {
      this.max.day = '0' + d;
    }
  }

  async  openGenderPicker() {
    const picker = await this.pickerController.create({
      columns: [{
        name: 'gender',
        options: [
          { text: 'Female', value: 'female' },
          { text: 'Male', value: 'male' },
          { text: 'Prefer not to say', value: 'not' }
        ]
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            this.user.gender = value.gender.text;
          }
        }
      ]
    });

    await picker.present();
  }

  doLogout() {
    this.storageService.remove('userinfo');
    this.storageService.remove('tel');
    this.storageService.remove('code');

    this.eventEmitterService.event.emit('userAction');
    this.navController.navigateBack('/tabs/tab4');
  }
}
