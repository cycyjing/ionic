import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
/* custom import */
import { LoadingIndicatorModule } from '../../shared/loading-indicator/loading-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    LoadingIndicatorModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
