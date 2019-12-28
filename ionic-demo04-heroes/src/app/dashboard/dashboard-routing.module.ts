import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { HeroDetailComponent } from '../module/hero-detail/hero-detail.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  { path: '/detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule { }
