import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MessagesComponent } from './messages.component'


@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MessagesComponent]
})
export class MessagesModule { }
