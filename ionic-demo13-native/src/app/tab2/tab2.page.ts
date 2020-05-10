import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  location: any = {};

  constructor(private geolocation: Geolocation) { }

  ionViewDidEnter() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords);
      this.location = resp.coords;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
