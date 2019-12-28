import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list: any[] = [];
  page = 1;
  hasData = false;

  constructor(public httpService: HttpService) {
    this.loadData(null);
  }

  loadData(e) {
    const api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page;
    this.httpService.ajaxGet(api)
      .then((data: any) => {
        this.list = this.list.concat(data.result);
        this.page++;
        if (this.list.length < 0) {
          e.target.disabled = true;
        }
        this.hasData = true;
        e ? e.target.complete() : '';
      })
      .catch((error) => { console.log(error); });
  }
}
