import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesPageRoutingModule } from './heroes-routing.module';

import { HeroesPage } from './heroes.page';
import { MessagesModule } from '../shared/messages/messages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesModule,
    HeroesPageRoutingModule
  ],
  declarations: [HeroesPage]
})
export class HeroesPageModule { }
