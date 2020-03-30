import { Component } from '@angular/core';
import { SearchList, Subheader } from '../../config';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  flag: boolean = true;
  searchList = SearchList;
  productList: any[] = [];
  subheaderList = Subheader.SUBHEADER;
  subheaderSelectedid: number = 1;

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

  subheaderChange(id) {
    this.subheaderSelectedid = id;
    
  }
}
