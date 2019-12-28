import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  list: any[] = [];
  page = 1;
  hasMore = true;

  constructor(public httpService: HttpService) { }

  ngOnInit() {
    this.loadData(null);
  }

  // getData() {
  //   const api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page;
  //   this.httpService.get(api).then((response: any) => {
  //     console.log(response);
  //     this.list = response.result;
  //   });
  //   this.page++;
  // }
  loadData(e) {
    const api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page;
    this.httpService.get(api).then((response: any) => {
      console.log(response);
      this.list = this.list.concat(response.result);
      if (response.result.length < 20) {
        e.target.disabled = true;
        this.hasMore = false;
      }
      this.page++;
      // first time is null, so dont need load more data
      e ? e.target.complete() : '';
    });
  }
}
