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
  productList: any[] = [];

  constructor() {
    for (let i = 1; i <= 3; i++) {
      this.slideList.push({
        src: 'assets/slide0' + i + '.png',
        url: ''
      });
    }
    for (let i = 1; i <= 10; i++) {
      if (i < 10) {
        this.hotList.push({
          src: 'assets/0' + i + '.jpg',
          title: 'hotList-' + i
        });
      } else {
        this.hotList.push({
          src: 'assets/' + i + '.jpg',
          title: 'hotList-' + i
        });
      }
    }
    // calculate hotList width
    this.hotListWidth = this.hotListWidth * this.hotList.length + 'px';
    // product list
    for (let i = 1; i <= 12; i++) {
      this.productList.push({
        src: 'assets/list' + i + '.jpg',
        title: 'productList-' + i
      });
    }
  }

  slideTouchEnd() {
    this.homeSlide.startAutoplay();
  }
}
