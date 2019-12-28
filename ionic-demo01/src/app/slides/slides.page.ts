import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  public slidesOpts = {
    // swiper api
    effect: 'fade',
    autoplay: {
      delay: 1000
    },
    loop:true
  }
  // @ViewChild('slides1') slides1

  constructor() { }

  ngOnInit() {
  }

}
