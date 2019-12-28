import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MessagesComponent]
})
export class MessagesModule { }
