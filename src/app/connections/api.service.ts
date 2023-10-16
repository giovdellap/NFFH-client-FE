import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Order } from '../model/order';
import { UserService } from '../user.service';
import { Areas, BaseStore, Cart, HomepageCardResponse, LoginRequest, LoginResponse, MyOrders, Product, ProductAvailability, RegistrationRequest, StoreProducts, StoresListResponse } from './connectionTypes';
import { cart } from './mockObjects/cart';
import { homepageCardsResponse } from './mockObjects/homepage';
import { loginResponse } from './mockObjects/login';
import { myOrders } from './mockObjects/personalpage';
import { store, storeProducts1, storeProducts2 } from './mockObjects/store';
import { areasList, storeslistresponse1, storeslistresponse2 } from './mockObjects/storesList';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  /** SERVICE MODE
   * 1 : API (connected to server)
   * 2: Mock
   */
  serviceMode = 2;
  url = "";

  constructor(private http: HttpClient, private user: UserService) { }

  login(email: string, password: string) {
    if (this.serviceMode == 1) {
      const req: LoginRequest = {
        email: email,
        password: password
      }
      return this.http.post<LoginResponse>(this.url+'/login', req).pipe(
        tap(x => this.user.setUser(x.token, x.name))
      )
    }
    else {
      this.user.setUser(loginResponse.token, loginResponse.name)
      return new Observable<LoginResponse>(observer => {
        observer.next(loginResponse);
        observer.complete();
      })
    }
  }

  register(email: string, password: string, name: string) {
    if (this.serviceMode == 1) {
      const req: RegistrationRequest = {
        email: email,
        password: password,
        name: name
      }
      return this.http.post<LoginResponse>(this.url+'/signup', req).pipe(
        tap(x => this.user.setUser(x.token, x.name))
      )
    }
    else {
      this.user.setUser(loginResponse.token, loginResponse.name)
      return new Observable<LoginResponse>(observer => {
        observer.next(loginResponse);
        observer.complete();
      })
    }
  }

  getHomepageCards() {
    if(this.serviceMode == 1) {
      return this.http.get<HomepageCardResponse>(this.url+'/hpcards');
    }
    else {
      return new Observable<HomepageCardResponse>(observer => {
        observer.next(homepageCardsResponse);
        observer.complete();
      })
    }
  }

  getLocationsList() {
    if(this.serviceMode == 1) {
      return this.http.get<Areas>(this.url+'/areas');
    } else {
      return new Observable<Areas>(observer => {
        observer.next(areasList);
        observer.complete();
      })
    }
  }

  getStoresList(page: number, area: string) {
    if(this.serviceMode == 1) {
      return this.http.get<StoresListResponse>(this.url+'/stores?zone='+area+'&page='+page);
    }
    else {
      return new Observable<StoresListResponse>(observer => {
        if(page === 1) observer.next(storeslistresponse1);
        if(page === 2) observer.next(storeslistresponse2);
        observer.complete();
      })
    }
  }

  getStore(id: string) {
    if(this.serviceMode == 1) {
      return this.http.get<BaseStore>(this.url+'/store/'+id);
    } else {
      return new Observable<BaseStore>(observer => {
        observer.next(store);
        observer.complete();
      })
    }
  }

  getProducts(id: string, page: number) {
    if(this.serviceMode == 1) {
      return this.http.get<StoreProducts>(this.url+'/products?id='+id+'&page='+page);
    } else {
      return new Observable<StoreProducts>(observer => {
        if(page === 1) observer.next(storeProducts1);
        if(page === 2) observer.next(storeProducts2);
        observer.complete();
      })
    }
  }

  updateCart(cart: Cart) {
    if(this.serviceMode == 1) {
      return this.http.post(this.url+'/updatecart', cart);
    } else {
      return new Observable();
    }
  }

  getCart() {
    if(this.serviceMode == 1) {
      return this.http.get<Cart>(this.url+'/cart');
    } else {
      return new Observable<Cart>(observer => {
        observer.next(cart);
        observer.complete();
      })
    }
  }

  checkAvailability(product: Product) {
    if(this.serviceMode == 1) {
      return this.http.get<ProductAvailability>(this.url+'/availability?productid='+product.id+'&seller='+product.seller)
    }else {
      return new Observable<ProductAvailability>(observer => {
        observer.next({ product: product, available: true });
        observer.complete();
      })
    }
  }

  completeOrder(order: Order) {
    if(this.serviceMode == 1) {
      return this.http.post<Order>(this.url +'/order', order)
    } else {
      return new Observable<Order>(observer => {
        order.accepted = true;
        observer.next(order);
        observer.complete();
      })
    }
  }

  getOrders() {
    if(this.serviceMode == 1) {
      return this.http.get<MyOrders>(this.url+'/orders')
    } else {
      return new Observable<MyOrders>(observer => {
        observer.next(myOrders);
        observer.complete();
      })
    }
  }
}
