import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myDevice: any;

  constructor(private device: Device) {
    this.myDevice = this.device;
  }

}
