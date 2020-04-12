import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  HaveProduct(cart: any[], id: string): boolean {
    if (cart && cart.length > 0) {
      for (const product of cart) {
        if (product.product_id == id) {
          return true;
        }
      }
      return false;
    }
    return false;
  }


}
