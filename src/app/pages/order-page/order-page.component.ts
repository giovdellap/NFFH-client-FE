import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { APIService } from 'src/app/connections/api.service';
import { BaseStore, OrderPart } from 'src/app/connections/connectionTypes';
import { CartProduct, StoreCart } from 'src/app/model/cart';
import { OrderPage, OrderPartPage } from 'src/app/model/order';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {

  order: OrderPage = {} as OrderPage

  constructor(
    private api: APIService,
    private cartService: CartService
  ) {
    var cart = this.cartService.getCart();
    cart.filter(item => {
      var pass = false;
      this.api.checkAvailability(item.product).subscribe(res => pass = res.available);
      return pass;
    });

    this.order = this.generateOrderPage(cart);

  }

  fromOrderParttoOrderPartPage(part: OrderPart): OrderPartPage {
    var seller: BaseStore = {} as BaseStore;
    this.api.getStore(part.seller).subscribe(x => seller = x);
    return {
      seller: seller,
      total: part.total
    }
  }

  fromOrderPartPagetoOrderPart(part: OrderPartPage): OrderPart {
    return {
      seller: part.seller.id,
      total: part.total
    }
  }

  generateOrderPage(cart: CartProduct[]): OrderPage {
    
    //generate StoreCart[]
    var list: StoreCart[] = [];
    cart.forEach(item => {
      var listElem = list.find(x => x.seller.id == item.product.seller);
      if(listElem) {
        list[list.indexOf(listElem)].products.push(item);
      } else {
        var seller = {} as BaseStore;
        this.api.getStore(item.product.id).subscribe(x => seller = x);
        list.push({
          seller: seller,
          products: [item]
        });
      }
    })

    //generate OrderPartPage[]
    var parts: OrderPartPage[] = []
    list.forEach(storecart => {
      var total = 0;
      storecart.products.forEach(prod => total = total + (prod.product.price * prod.quantity));
      parts.push({ seller: storecart.seller, total: total })
    })

    //generate numbers
    const totalNoCommissions = parts.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0)
    const commission = totalNoCommissions * 0.05;
    const total = totalNoCommissions + commission; 
    return {
      parts: parts,
      commission: commission,
      total: total,
      pickup: new Date(),
      completed: false
    }
  }
}
