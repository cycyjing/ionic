import { Component } from '@angular/core';
import { MyList } from '../config/my-list';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  MYLIST = MyList.LIST;

  constructor() { }


}
