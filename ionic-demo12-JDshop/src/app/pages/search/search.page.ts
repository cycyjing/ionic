import { Component } from '@angular/core';
import { SearchList } from '../../config/search-list-config';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  flag: boolean = true;
  SearchList = SearchList;
  productList: any[] = [];

  constructor() {
    for (let i = 1; i <= 12; i++) {
      this.productList.push({
        img: 'assets/list' + i + '.jpg',
        title: 'item- dfgdfgsdfg dfgdfgsdfgsd  sdfsdfsdf sdfsfsdfs dfse fgd' + i
      });
    }
  }

  doSearch() {
    this.flag = false;
  }
}
