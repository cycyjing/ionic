import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  list = [];

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(`item ${i}`);
    }
  }
  loadData(e) {
    setTimeout(() => {
      for (let i = 1; i < 9; i++) {
        this.list.push(`from serve---item ${i}`);
      }
      // if dont have this, cannot infinite to load more data
      e.target.complete();
    }, 1000);
  }
}
