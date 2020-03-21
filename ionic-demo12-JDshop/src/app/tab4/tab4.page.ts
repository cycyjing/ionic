import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyList } from '../config/my-list';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  flag: boolean = true;
  image = 'assets/user.png';
  MyList = MyList;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data.flag);
      this.flag = data.flag;
    });
  }


}
