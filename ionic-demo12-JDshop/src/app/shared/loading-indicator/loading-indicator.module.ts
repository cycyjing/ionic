import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadingIndicatorComponent } from './loading-indicator.component';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  exports: [LoadingIndicatorComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class LoadingIndicatorModule { }
