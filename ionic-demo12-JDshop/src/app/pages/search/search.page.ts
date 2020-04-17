import { Component, ViewChild, OnInit } from '@angular/core';
import { IonContent, AlertController, NavController } from '@ionic/angular';
import { SearchList, Subheader } from '../../config';
import { CommonService, StorageService } from '../../services';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content;
  flag: boolean = true; // is show subheader
  searchList = SearchList;
  config: any = {}; // api config
  productList: any[] = [];
  keywords; // search keywords
  page: number = 1;
  subheaderList = Subheader.SUBHEADER;
  subheaderSelectedid: number = 1;
  sort = ''; // sort type
  infiniteScrollStatus: boolean = true;
  historyList: any[] = [];

  constructor(
    public alertController: AlertController,
    public navController: NavController, public commonService: CommonService, public storageService: StorageService) {
    this.config = commonService.config;
  }

  ngOnInit(): void {
    this.getHistory();
  }

  goBack() {
    this.navController.back();
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

    this.saveHistory();
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

  saveHistory() {
    this.historyList = this.storageService.get('history');
    if (this.historyList) {// exist
      // have duplicate or not
      if (this.historyList.indexOf(this.keywords) == -1 && this.keywords != '' && this.keywords != null) {
        this.historyList.push(this.keywords);
      }
    } else {// dont exist
      this.historyList = [];
      this.historyList.push(this.keywords);
    }
    this.storageService.set('history', this.historyList);
  }

  getHistory() {
    let history = this.storageService.get('history');
    history ? this.historyList = history : [];
  }

  async removeHistory(index) {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Does delete it?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          handler: () => {
            this.historyList.splice(index, 1);
            this.storageService.set('history', this.historyList);
          }
        }
      ]
    });

    await alert.present();
  }

  searchByHistory(keywords) {
    this.keywords = keywords;
    this.doSearch();
  }
}
