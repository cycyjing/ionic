import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  constructor(public navController: NavController) { }

  goSearch() {
    this.navController.navigateForward('/search');
  }
}
