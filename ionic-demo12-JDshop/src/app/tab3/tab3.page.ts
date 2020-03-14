import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  list: any[] = [];

  constructor() {
    for (let i = 1; i <= 9; i++) {
      this.list.push('assets/0' + i + '.jpg');
    }
  }

}
