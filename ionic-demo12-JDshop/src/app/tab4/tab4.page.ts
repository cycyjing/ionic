import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyList } from '../config';
import { StorageService, EventEmitterService } from '../services';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  myList = MyList;
  userinfo: any = {};

  constructor(
    public activatedRoute: ActivatedRoute,
    public storageService: StorageService,
    public eventEmitterService: EventEmitterService) {
    this.getUserInfo();
  }

  ngOnInit(): void {
    // create user action, when it is listened update data
    this.eventEmitterService.event.on('userAction', () => {
      this.getUserInfo();
    });
  }

  getUserInfo() {
    const userinfo = this.storageService.get('userinfo');
    if (userinfo && userinfo.username) {
      this.userinfo = userinfo;
    } else {
      this.userinfo = '';
    }
  }

}
