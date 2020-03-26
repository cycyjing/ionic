import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  productList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.getProductListData();
  }

  getProductListData() {
    for (let i = 1; i <= 12; i++) {
      this.productList.push({
        img: 'assets/list' + i + '.jpg',
        title: 'item- dfgdfgsdfg dfgdfgsdfgsd  sdfsdfsdf sdfsfsdfs dfse fgd' + i
      });
    }
  }

}
