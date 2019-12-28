import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  list: any[] = [];
  @ViewChild('infinite', { static: false }) myInfinite;

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(`item ${i}`);
    }
  }

  ngOnInit() {
  }

  loadData(e) {
    setTimeout(() => {
      for (let i = 1; i <= 10; i++) {
        this.list.push(`item ${i} from serve`);
      }
      e.target.complete();
    }, 1000);

    if (this.list.length > 100) {
      // e.target.disabled = true;
      this.myInfinite.disabled = true;
    }
  }
  doStop() {
    this.myInfinite.disabled = true;
    
  }
}
