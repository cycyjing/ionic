import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list = [];
  constructor() {
    this.getData();
  }

  getData() {
    for (let i = 0; i < 10; i++) {
      this.list.push(`item ${i}`);
    }
  }
  doRefresh(e) {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.unshift(`item ${i} from serve`);
      }
      if (this.list.length > 50) {
        e.target.disabled = true;
      }
      e.target.complete();
    }, 1000);
  }
}
