import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CommonService } from '../../services/common.service';
import { Subheader } from '../../config';

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
  subheaderList = Subheader.SUBHEADER;
  subheaderSelectedid: number = 1;
  infiniteScrollStatus: boolean = true;

  constructor(public commonService: CommonService, public activatedRoute: ActivatedRoute) {
    this.config = commonService.config;
    this.activatedRoute.queryParams.subscribe((data) => {
      this.cid = data.cid;
    });
  }

  ngOnInit() {
    this.getProductListData(null);
  }

  doSearch() { }

  getProductListData(event) {
    console.log(this.infiniteScrollStatus);
    let api;
    if (this.sort) {
      api = 'api/plist?cid=' + this.cid + '&page=' + this.page + '&sort=' + this.sort;
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
        this.infiniteScrollStatus = false;
      }
    });
  }

  subheaderChange(id) {
    this.subheaderSelectedid = id;
    this.sort = this.subheaderList[id - 1].field + '_' + this.subheaderList[id - 1].sort;
    // reset data
    this.page = 1;
    this.productList = [];
    if (id != 1) {
      if (this.subheaderList[id - 1].sort < 0) {
        this.subheaderList[id - 1].icon = 'caret-down';
      } else {
        this.subheaderList[id - 1].icon = 'caret-up';
      }
    }
    // change sort status
    this.subheaderList[id - 1].sort = this.subheaderList[id - 1].sort * -1;
    // to page top
    this.content.scrollToTop(0);
    this.infiniteScrollStatus = true;
    this.getProductListData(null);
  }
}
