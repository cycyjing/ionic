import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
/* custom import */
import { LoadingIndicatorModule } from '../../shared/loading-indicator/loading-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListPageRoutingModule,
    LoadingIndicatorModule
  ],
  declarations: [ProductListPage]
})
export class ProductListPageModule {}
