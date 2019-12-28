import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.page.html',
  styleUrls: ['./news-info.page.scss'],
})
export class NewsInfoPage implements OnInit {
  list: any = {};
  hasData = false;

  constructor(public activatedRoute: ActivatedRoute, public httpService: HttpService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.getData(data.aid)
    });
  }

  getData(aid) {
    const api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid;
    this.httpService.ajaxGet(api)
      .then((response: any) => {
        this.list = response.result[0]
        this.hasData = true;
        console.log(this.list)
      })
      .catch((error) => { console.log(error) })
  }
}
