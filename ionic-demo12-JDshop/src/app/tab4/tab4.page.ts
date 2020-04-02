import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyList } from '../config';
import { StorageService } from '../services';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  myList = MyList;
  userinfo: any = {};

  constructor(public activatedRoute: ActivatedRoute, public storageService: StorageService) {
    const userinfo = this.storageService.get('userinfo');
    console.log(userinfo);
    if (userinfo && userinfo.username) {
      this.userinfo = userinfo;
    }
  }

}
