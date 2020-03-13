import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  navbarList: any[] = [];
  productList: any[] = [];

  constructor() {
    // left
    for (let i = 0; i < 30; i++) {
      this.navbarList.push('item-' + (i + 1));
    }
    // right
    for (let i = 1; i <= 12; i++) {
      this.productList.push({
        img: 'assets/list' + i + '.jpg',
        url: '',
        title: 'item' + i
      });
    }
  }


}
