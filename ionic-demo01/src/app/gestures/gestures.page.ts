import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gestures',
  templateUrl: './gestures.page.html',
  styleUrls: ['./gestures.page.scss'],
})
export class GesturesPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  onTap() {
    console.log('tap tap ...');
  }

  async onPress() {
    console.log('press press ...');
    const alert = await this.alertController.create({
      backdropDismiss: false,  //空白处按到了，窗口也不会关闭
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

  }
}
