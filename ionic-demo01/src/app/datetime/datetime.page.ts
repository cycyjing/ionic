import { Component, OnInit } from '@angular/core';
import sd from 'silly-datetime';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  public nowDate: string;
  public customPickerOptions = {
    buttons: [{
      text: '取消',
      handler: () => console.log('Clicked 取消!')
    },
    {
      text: '保存',
      handler: () => console.log('Clicked 保存!')
    }]
  };
  constructor() {
    this.nowDate = sd.format(new Date(), 'YYYY-MM-DD HH:mm');

  }

  ngOnInit() {
  }
  datetimeChange(e) {
    console.log(e.detail.value);
    console.log(this.nowDate);
  }
}
