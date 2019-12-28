import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  clickMsg = '';
  currentItem = {
    name: 'aaa'
  };

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async onSave() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Saved. Event target is Save',
      buttons: ['OK']
    });

    await alert.present();
  }

}
