import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  leftList: any[] = [];
  rightList: any[] = [];

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.leftList.push(`item-${i}`);
    }
    for (let i = 1; i <= 12; i++) {
      this.rightList.push({
        src: 'assets/list' + i + '.jpg',
        title: 'rightList-' + i
      });
    }
  }

}
