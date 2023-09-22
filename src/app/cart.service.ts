import { Injectable } from '@angular/core';
import { Product } from './connections/connectionTypes';
import { CartProduct } from './model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartProduct[] = [];

  constructor() { }

  updateProduct(product: Product, quantity: number) {
    var productInCart = false;
    var actualIndex = -1;
    this.cart.forEach(x => {
      if(x.product == product) {
        productInCart = true;
        actualIndex = this.cart.indexOf(x);
      }
    });
    if(productInCart) {
      if(quantity === 0) {
        this.cart.splice(actualIndex, 1);
      } else {
        var updatedItem = {...this.cart[actualIndex]};
        updatedItem.quantity = quantity;
        this.cart.splice(actualIndex, 1, updatedItem);
      }
    } else {
      this.cart.push({
        product: product,
        quantity: quantity
      });
    }
  }

  checkProduct(product: Product) {
    var quantity = 0;
    this.cart.forEach(x => {
      if(x.product == product) quantity = x.quantity;
    });
    return quantity;
  }

  
}
