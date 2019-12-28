import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(public navParams: NavParams) {
    console.log(this.navParams);
    console.log(this.navParams.data);
    console.log(this.navParams.data.aid);
  }

  ngOnInit() { }

  onClose() {
    this.navParams.data.modal.dismiss({
      result: {
        msg: 'destroyed modal meg',
        flag: true
      }
    });
  }
  doRegister() {

  }
}
