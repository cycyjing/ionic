import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component'


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
