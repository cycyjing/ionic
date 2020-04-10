import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.page.html',
  styleUrls: ['./product-content.page.scss'],
})
export class ProductContentPage implements OnInit {
  segment: string = 'product';
  config: any = {};
  result: any = {};

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
}
