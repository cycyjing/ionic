import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listSlides: any[] = [];

  constructor() {
    for (let i = 1; i <= 3; i++) {
      this.listSlides.push('assets/slide0' + i + '.png');
    }
  }


}
