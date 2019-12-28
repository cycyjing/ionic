import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsInfoPageRoutingModule } from './news-info-routing.module';

import { NewsInfoPage } from './news-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsInfoPageRoutingModule
  ],
  declarations: [NewsInfoPage]
})
export class NewsInfoPageModule {}
