import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { MessagesModule } from '../shared/messages/messages.module';
import { HeroSearchComponent } from '../component/hero-search/hero-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, HeroSearchComponent]
})
export class DashboardPageModule { }
