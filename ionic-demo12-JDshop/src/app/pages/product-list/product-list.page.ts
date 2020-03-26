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

  constructor(public commonService: CommonService, public activatedRoute: ActivatedRoute) {
    this.config = commonService.config;
  }

  ngOnInit() {
    this.getProductListData();
  }

  getProductListData() {
    let cid;
    this.activatedRoute.queryParams.subscribe((data) => {
      cid = data.cid;
    });
    this.commonService.ajaxGet('api/plist?cid=' + cid).then((data: any) => {
      this.productList = data.result;
    });
  }

}
