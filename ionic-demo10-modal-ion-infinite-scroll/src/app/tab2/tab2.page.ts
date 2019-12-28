import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalComponent } from './component/modal/modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) { }

  async onClick() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      // pass params
      componentProps: {
        aid: 123,
        username: 'js'
      }
    });
    await modal.present();
    // listen the destroyed modal event
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
