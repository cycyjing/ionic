import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressEditPageRoutingModule } from './address-edit-routing.module';

import { AddressEditPage } from './address-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressEditPageRoutingModule
  ],
  declarations: [AddressEditPage]
})
export class AddressEditPageModule {}
