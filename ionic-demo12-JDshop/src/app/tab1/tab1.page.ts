import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('homeSlide', { static: false }) homeSlide;

  slideList: any[] = [];
  slideOpts = {
    autoplay: {
      delay: 2000,
    },
    delay: 1000,
    loop: true
  };
  hotList: any[] = [];
  hotListWidth: any = 111;

  constructor() {
    for (let i = 1; i < 4; i++) {
      this.slideList.push({
        src: 'assets/slide0' + i + '.png',
        url: ''
      });
    }
    for (let i = 1; i < 10; i++) {
      this.hotList.push({
        src: 'assets/0' + i + '.jpg',
        title: 'item-' + i
      });
    }
    // calculate hotList width
    this.hotListWidth = this.hotListWidth * this.hotList.length + 'px';
  }

  slideTouchEnd() {
    this.homeSlide.startAutoplay();
  }
}
