import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage {
  defaultColumnOptions = [
    [
      'Female',
      'Male',
    ]
  ];

  constructor(public pickerController: PickerController) { }

  async  openGenderPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions) {
    const picker = await this.pickerController.create({
      columns: [],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ]
    });

    await picker.present();
  }

}
