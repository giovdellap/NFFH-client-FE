import { Injectable } from '@angular/core';
import { APIService } from './connections/api.service';
import { Product } from './connections/connectionTypes';
import { CartProduct } from './model/cart';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartProduct[] = [];

  constructor(private api: APIService, private user: UserService) {
    this.user.getObservable().subscribe(x => {
      if(x) {
        this.api.getCart().subscribe(res => {
          this.cart = res.products;
        })
      }
    })
  }

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
        console.log('in right if')
        this.cart.splice(actualIndex, 1);
        console.log('cart 2', this.cart.toString())
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
    this.api.updateCart({products: this.cart}).subscribe();
  }

  checkProduct(product: Product) {
    var quantity = 0;
    this.cart.forEach(x => {
      if(x.product.id == product.id && x.product.seller == product.seller) quantity = x.quantity;
    });
    return quantity;
  }

  getCart() {
    return this.cart;
  }

  
}
