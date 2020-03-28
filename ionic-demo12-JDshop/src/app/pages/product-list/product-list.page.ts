import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content;
  config: any = {};
  productList: any[] = [];
  cid;
  page = 1;
  sort = '';
  subheaderList = [];
  subheaderSelectedid: number = 1;

  constructor(public commonService: CommonService, public activatedRoute: ActivatedRoute) {
    this.config = commonService.config;
    this.activatedRoute.queryParams.subscribe((data) => {
      this.cid = data.cid;
    });
    this.subheaderList = [
      {
        id: 1,
        title: 'All',
        field: 'all',
        sort: -1
      },
      {
        id: 2,
        title: 'Sales',
        field: 'salecount',
        sort: -1
      },
      {
        id: 3,
        title: 'Price',
        field: 'price',
        sort: -1
      },
    ];
  }

  ngOnInit() {
    this.getProductListData(null);
  }

  doSearch() { }

  getProductListData(event) {
    let api;
    if (this.sort) {
      api = 'api/plist?cid=' + this.cid + '&page=' + this.page + '&sort=' + this.sort;
      console.log(api);
    } else {
      api = 'api/plist?cid=' + this.cid + '&page=' + this.page;
    }

    this.commonService.ajaxGet(api).then((data: any) => {
      // concat pages data
      this.productList = this.productList.concat(data.result);
      this.page++;
      console.log(this.page);
      event ? event.target.complete() : '';
      // does have more data
      if (data.result.length < 10) {
        event ? event.target.disabled = true : '';
        console.log('disabled---' + data.result.length);
      }
    });
  }

  subheaderChange(id) {
    this.subheaderSelectedid = id;
    this.sort = this.subheaderList[id - 1].field + '_' + this.subheaderList[id - 1].sort;
    // reset data
    this.page = 1;
    this.productList = [];
    // change sort status
    this.subheaderList[id - 1].sort = this.subheaderList[id - 1].sort * -1;
    // to page top
    this.content.scrollToTop(0);
    this.getProductListData(null);
  }
}
