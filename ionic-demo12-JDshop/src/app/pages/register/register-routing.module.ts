import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';
import { RegisterStep1Component } from './register-step1/register-step1.component';
import { RegisterStep2Component } from './register-step2/register-step2.component';
import { RegisterStep3Component } from './register-step3/register-step3.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      { path: 'step1', component: RegisterStep1Component },
      { path: 'step2', component: RegisterStep2Component },
      { path: 'step3', component: RegisterStep3Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule { }
