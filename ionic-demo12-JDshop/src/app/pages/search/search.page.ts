import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { SearchList, Subheader } from '../../config';
import { CommonService, StorageService } from '../../services';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  @ViewChild(IonContent, { static: false }) content;
  flag: boolean = true;
  searchList = SearchList;
  config: any = {};
  productList: any[] = [];
  keywords;
  page: number = 1;
  subheaderList = Subheader.SUBHEADER;
  subheaderSelectedid: number = 1;
  sort = '';
  infiniteScrollStatus: boolean = true;

  constructor(public commonService: CommonService, public storageService: StorageService) {
    this.config = commonService.config;
  }

  doSearch() {
    this.flag = false;
    this.page = 1;
    this.infiniteScrollStatus = true;
    this.content.scrollToTop(0);
    this.subheaderSelectedid = 1;

    this.commonService.ajaxGet('api/plist?search=' + this.keywords + '&page=' + this.page).then((data: any) => {
      this.productList = data.result;
    });
  }

  getProductListData(event) {
    let api;
    if (this.sort) {
      api = 'api/plist?search=' + this.keywords + '&page=' + this.page + '&sort=' + this.sort;
    } else {
      api = 'api/plist?search=' + this.keywords + '&page=' + this.page;
    }

    this.commonService.ajaxGet(api).then((data: any) => {
      this.productList = this.productList.concat(data.result);
      this.page++;
      console.log(this.page);
      event ? event.target.complete() : '';
      if (data.result.length < 10) {
        this.infiniteScrollStatus = false;
      }
    });
  }

  subheaderChange(id) {
    this.subheaderSelectedid = id;
    this.sort = this.subheaderList[id - 1].field + '_' + this.subheaderList[id - 1].sort;
    if (id != 1) {
      if (this.subheaderList[id - 1].sort < 0) {
        this.subheaderList[id - 1].icon = 'caret-down';
      } else {
        this.subheaderList[id - 1].icon = 'caret-up';
      }
    }
    this.page = 1;
    this.productList = [];
    this.subheaderList[id - 1].sort = this.subheaderList[id - 1].sort * -1;
    this.infiniteScrollStatus = true;
    this.content.scrollToTop(0);
    this.getProductListData(null);
  }
}
