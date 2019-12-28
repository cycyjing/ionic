import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentCustomer = 'Hercules';
  title = 'Template Syntax';
  itemImageUrl = 'assets/images/default01.png';

  constructor() { }

  getVal(): number {
    return 1 + 1;
  }
  deleteHero() {

  }
}
