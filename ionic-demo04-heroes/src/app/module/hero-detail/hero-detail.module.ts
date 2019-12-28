import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component'


@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroDetailComponent]
})
export class HeroDetailModule { }
