import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  HaveProduct(cartList: any[], currentProduct): boolean {
    if (cartList && cartList.length > 0) {
      for (const product of cartList) {
        if (product.product_id == currentProduct.product_id && product.product_attrs == currentProduct.product_attrs) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  getCartTotalCount(cartList: any[]): number {
    let sum = 0;
    for (const product of cartList) {
      sum += product.product_count;
    }
    return sum;
  }
}
