import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SearchList } from '../../config/search-list';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  flag: boolean = true;
  SearchList = SearchList;
  productList: any[] = [];

  constructor(public navController: NavController) {
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
