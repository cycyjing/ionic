import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('slides', { static: false }) slides;
  slidesList: any[] = [];
  slidesOpts = {
    speed: 2000,
    autoplay: {
      delay: 2000,
    },
    loop: true,
  };

  constructor() {
    for (var i = 1; i <= 3; i++) {
      this.slidesList.push({
        img: 'assets/slide0' + i + '.png',
        url: ''
      });
    }
  }

  slideTouchEnd() {
    this.slides.startAutoplay();
  }
}
