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
    this.commonService.ajaxGet('api/plist?is_hot=1').then((data: any) => {
      this.hotList = data.result;
    });
  }

  getProductListData() {
    this.commonService.ajaxGet('api/plist').then((data: any) => {
      this.productList = data.result;
    });
  }
}
