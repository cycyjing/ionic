import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SearchList } from '../../config/search-list';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  flag: boolean = false;
  SearchList = SearchList;

  constructor(public navController: NavController) { }

  goBack() {
    this.navController.back();
  }

  doSearch() {
    this.flag = false;
  }
}
