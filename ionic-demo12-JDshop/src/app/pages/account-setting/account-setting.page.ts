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
  maxDate: string = '';

  constructor(
    public pickerController: PickerController,
    public navController: NavController,
    public storageService: StorageService,
    public eventEmitterService: EventEmitterService) {
    this.maxDate = new Date().toISOString().substr(0, 10);
    console.log(new Date().toISOString() + '---' + this.maxDate);
  }

  goBack() {
    this.navController.back();
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

    this.eventEmitterService.event.emit('userAction');
    this.navController.navigateBack('/tabs/tab4');
  }
}
