import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { CommonService, StorageService, CartService } from '../../services';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.page.html',
  styleUrls: ['./product-content.page.scss'],
})
export class ProductContentPage implements OnInit {
  segment: string = 'product'; // header segment
  config: any = {}; // api config
  result: any = {}; // response data from api
  count: number = 1; // product purchase count
  sum: number = 0; // total num of products in the cart

  constructor(
    public activatedRoute: ActivatedRoute,
    public navController: NavController,
    public toastController: ToastController,
    public commonService: CommonService,
    public storageService: StorageService,
    public cartService: CartService) {
    this.config = commonService.config;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.getProductContentData(data.id);
    });
    const cartList = this.storageService.get('cart');
    if (cartList && cartList.length > 0) {
      this.sum = this.cartService.getCartTotalCount(cartList);
    }
  }

  goBack() {
    this.navController.back();
  }

  getProductContentData(id) {
    this.commonService.ajaxGet('api/pcontent?id=' + id).then((data: any) => {
      this.result = data.result;
      console.log('special price---' + data.result.price);
    });
  }

  // highlight clicked attributes
  changeAttr(e) {
    const element = e.srcElement; // selected element
    if (element.nodeName == 'SPAN') {
      // get all sbling nodes delete className (not highlight)
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
    // get selected attributes
    const spanActive = document.querySelectorAll('.attr .active');
    for (let i = 0; i < spanActive.length; i++) {
      if (i < 1) {
        product_attrs += spanActive[i].innerHTML;
      } else {
        product_attrs += ',' + spanActive[i].innerHTML;
      }
    }

    const productJson = {
      product_id: this.result._id,
      product_title: this.result.title,
      product_pic: this.result.pic,
      product_price: this.result.price < this.result.old_price ? this.result.price : this.result.old_price,
      product_count: this.count,
      product_attrs,
      checked: false
    };

    // add product to the list
    const cartList = this.storageService.get('cart');
    // the list is not empty
    if (cartList && cartList.length > 0) {
      // have product, old count + new count
      if (this.cartService.HaveProduct(cartList, productJson)) {
        for (const product of cartList) {
          if (product.product_id == this.result._id && product.product_attrs == product_attrs) {
            product.product_count += this.count;
          }
        }
      } else { // dont have, add to the list
        cartList.push(productJson);
      }
      this.storageService.set('cart', cartList);
    } else {// the list is empty
      const cart = [];
      cart.push(productJson);
      this.storageService.set('cart', cart);
    }

    this.sum += this.count;

    this.showToast('Product add to Cart.');
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
