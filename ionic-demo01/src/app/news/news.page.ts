import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public list: any = []
  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 9; i++) {
      this.list.push(`news ${i}`)
    }
  }

}
