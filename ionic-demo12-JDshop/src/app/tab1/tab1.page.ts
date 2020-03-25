import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('slides', { static: false }) slides;
  config: any = {};
  slidesList: any[] = [];
  slidesOpts = {
    speed: 2000,
    autoplay: {
      delay: 2000,
    },
    loop: true,
  };
  hotList: any[] = [];
  productList: any[] = [];

  constructor(public commonService: CommonService) {
    this.config = commonService.config;
  }

  ngOnInit(): void {
    // slides
    this.getSlidesData();
    // hot
    this.getHotListData();
    // productList
    this.getProductListData();
  }

  slideTouchEnd() {
    this.slides.startAutoplay();
  }

  getSlidesData() {
    this.commonService.ajaxGet('api/focus').then((data: any) => {
      this.slidesList = data.result;
    });
  }

  getHotListData() {
    for (let i = 1; i <= 10; i++) {
      if (i < 10) {
        this.hotList.push({
          img: 'assets/0' + i + '.jpg',
          url: '',
          title: 'item-' + i
        });
      } else {
        this.hotList.push({
          img: 'assets/' + i + '.jpg',
          url: '',
          title: 'item-' + i
        });
      }
    }
  }

  getProductListData() {
    for (let i = 1; i <= 12; i++) {
      this.productList.push({
        img: 'assets/list' + i + '.jpg',
        url: ''
      });
    }
  }
}
