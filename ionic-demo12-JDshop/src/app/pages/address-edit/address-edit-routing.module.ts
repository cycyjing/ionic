import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressEditPage } from './address-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AddressEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressEditPageRoutingModule {}
