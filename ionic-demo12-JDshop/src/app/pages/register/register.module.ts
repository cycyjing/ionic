import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { RegisterStep1Component } from './register-step1/register-step1.component';
import { RegisterStep2Component } from './register-step2/register-step2.component';
import { RegisterStep3Component } from './register-step3/register-step3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, RegisterStep1Component, RegisterStep2Component, RegisterStep3Component]
})
export class RegisterPageModule { }
