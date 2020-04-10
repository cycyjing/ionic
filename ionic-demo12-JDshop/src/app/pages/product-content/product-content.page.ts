import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.page.html',
  styleUrls: ['./product-content.page.scss'],
})
export class ProductContentPage implements OnInit {
  segment = 'product';
  config: any = {};
  result: any = {};
  count = 1;

  constructor(public commonService: CommonService, public activatedRoute: ActivatedRoute) {
    this.config = commonService.config;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.getProductContentData(data.id);
    });
  }

  getProductContentData(id) {
    this.commonService.ajaxGet('api/pcontent?id=' + id).then((data: any) => {
      this.result = data.result;
      console.log(data.result);
      console.log('special price---' + data.result.price);
    });
  }

  changeAttr(e) {
    const element = e.srcElement;
    if (element.nodeName == 'SPAN') {
      // get all sbling nodes delete className
      const children = element.parentNode.children;
      for (let i = 0; i < children.length; i++) {
        children[i].className = '';
      }
      element.className = 'active';
    }
  }

  decreaseCount() {
    if (this.count < 2) {
      this.count = 2;
    }
    this.count--;
  }

  increaseCount() {
    if (this.count < 0) {
      this.count = 0;
    }
    this.count++;
  }

  addCart() {
    let product_attrs = '';
    const spanActive = document.querySelectorAll('.attr .active');
    for (let i = 0; i < spanActive.length; i++) {
      if (i < 1) {
        product_attrs += spanActive[i].innerHTML;
      } else {
        product_attrs += ',' + spanActive[i].innerHTML;
      }
    }

    const cartJson = {
      product_id: this.result._id,
      product_title: this.result.title,
      product_pic: this.result.pic,
      product_price: this.result.price,
      product_count: this.count,
      product_attrs
    };
    console.log(cartJson);
  }
}
