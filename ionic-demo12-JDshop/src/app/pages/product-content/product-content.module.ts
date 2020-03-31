import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductContentPageRoutingModule } from './product-content-routing.module';

import { ProductContentPage } from './product-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductContentPageRoutingModule
  ],
  declarations: [ProductContentPage]
})
export class ProductContentPageModule {}
