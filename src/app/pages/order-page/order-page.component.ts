import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, forkJoin, tap } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { APIService } from 'src/app/connections/api.service';
import { BaseStore, OrderPart, ProductAvailability } from 'src/app/connections/connectionTypes';
import { CartProduct, StoreCart } from 'src/app/model/cart';
import { Order, OrderPage, OrderPartPage } from 'src/app/model/order';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {

  order: OrderPage = {} as OrderPage
  datepicker: FormControl = new FormControl();
  disabled = false;
  startDate = new Date();
  endDate = new Date();

  completed = false;
  error = false;

  constructor(
    private api: APIService,
    private cartService: CartService
  ) {
    var cart = this.cartService.getCart();

  
    this.order = this.generateOrderPage(cart);
    this.endDate.setDate(this.endDate.getDate() + 2);
    this.datepicker.valueChanges.subscribe(x => {
      console.log(x)
    })
    console.log('order', this.order)
  }

  confirmOrder() {
    var toSend: Order = {
      products: this.cartService.getCart(),
      commission: this.order.commission,
      pickup: this.datepicker.value,
      total: this.order.total,
      accepted: false,
      withdrawn: false
    }
    this.api.completeOrder(toSend).subscribe(res => {
      if (res.accepted) {
        this.completed = true;
      } else {
        this.error = true;
      }
    })

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
      var listElem = list.find(x => x.seller.username == item.product.seller);
      if(listElem) {
        list[list.indexOf(listElem)].products.push(item);
      } else {
        this.api.getStore(item.product.seller).subscribe(x => list.push({
          seller: x,
          products: [item]
        }));
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
