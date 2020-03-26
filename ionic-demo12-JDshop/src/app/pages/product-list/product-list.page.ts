import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  config: any = {};
  productList: any[] = [];
  cid;
  page: number = 1;
  subheaderList = [];
  subheaderSelectedid = 1;

  constructor(public commonService: CommonService, public activatedRoute: ActivatedRoute) {
    this.config = commonService.config;
    this.activatedRoute.queryParams.subscribe((data) => {
      this.cid = data.cid;
    });
    this.subheaderList = [
      {
        id: 1,
        title: 'All',
        sort: 1
      },
      {
        id: 2,
        title: 'Sales',
        sort: 1
      },
      {
        id: 3,
        title: 'Price',
        sort: 1
      },
    ];
  }

  ngOnInit() {
    this.getProductListData(null);
  }

  doSearch() { }

  getProductListData(event) {
    this.commonService.ajaxGet('api/plist?cid=' + this.cid + '&page=' + this.page).then((data: any) => {
      // concat pages data
      this.productList = this.productList.concat(data.result);
      this.page++;
      event ? event.target.complete() : '';
      if (data.result.length < 10) {
        event ? event.target.disabled = true : '';
      }
    });
  }

  subheaderChange(item) {
    this.subheaderSelectedid = item.id;
  }
}
