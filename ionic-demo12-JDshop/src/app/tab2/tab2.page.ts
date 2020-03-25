import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  config: any = {};
  categoryList: any[] = [];
  selectedid = '';
  subCategoryList: any[] = [];

  constructor(public commonService: CommonService) {
    this.config = commonService.config;
  }

  ngOnInit(): void {
    // left: navbar
    this.getNavbarData();
  }

  getNavbarData() {
    this.commonService.ajaxGet('api/pcate').then((data: any) => {
      this.categoryList = data.result;
      this.getProductsData(this.categoryList[0]._id);
    });
  }

  getProductsData(pid) {
    this.selectedid = pid;
    this.commonService.ajaxGet('api/pcate?pid=' + pid).then((data: any) => {
      this.subCategoryList = data.result;
    });
  }
}
