import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  navbarList: any[] = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.navbarList.push('item-' + (i + 1));
    }
  }


}
