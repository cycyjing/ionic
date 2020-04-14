import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  // does have the product 
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

  // the total count of products in the cart
  getCartTotalCount(cartList: any[]): number {
    let sum = 0;
    if (cartList && cartList.length > 0) {
      for (const product of cartList) {
        sum += product.product_count;
      }
    }
    return sum;
  }

  // the total price of the selected products
  getSumPrice(cartList: any[]): number {
    let sum = 0;
    if (cartList && cartList.length > 0) {
      for (const product of cartList) {
        if (product.checked) {
          sum += parseInt(product.product_price) * product.product_count;
        }
      }
    }
    return sum;
  }

  // the length of selected products
  getSelectedProductsLength(cartList: any[]): number {
    let length = 0;
    if (cartList && cartList.length > 0) {
      for (const product of cartList) {
        if (product.checked) {
          length++;
        }
      }
      return length;
    }
    return 0;
  }
}
