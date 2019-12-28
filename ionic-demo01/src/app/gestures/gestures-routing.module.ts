import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GesturesPage } from './gestures.page';

const routes: Routes = [
  {
    path: '',
    component: GesturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GesturesPageRoutingModule {}
