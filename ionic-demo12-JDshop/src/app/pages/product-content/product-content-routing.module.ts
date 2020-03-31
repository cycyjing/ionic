import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductContentPage } from './product-content.page';

const routes: Routes = [
  {
    path: '',
    component: ProductContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductContentPageRoutingModule {}
