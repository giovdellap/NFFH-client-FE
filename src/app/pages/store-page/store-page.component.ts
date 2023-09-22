import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { APIService } from 'src/app/connections/api.service';
import { Product } from 'src/app/connections/connectionTypes';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {

  storeID: string = '';
  name: string = '';
  location: string = '';
  image: string = '';

  products: Product[] = [];
  page: number = 0;
  total: number = 0;

  constructor(
    private api: APIService,
    private route: ActivatedRoute
  ) {
    this.storeID = String(this.route.snapshot.paramMap.get('id'));
    this.api.getStore(this.storeID).pipe(
      tap(res => {
        this.name = res.name;
        this.location = res.location;
        this.image = res.image;
      }),
      switchMap(res => this.api.getProducts(this.storeID, 1))
    ).subscribe(res => {
      this.page = res.page;
      this.total = res.total;
      this.products = res.products;
    })
  }

  changePageEvent(page: number) {
    console.log('aaaaa', page);
    this.page = page;
    this.api.getProducts(this.storeID, page).subscribe(res => {
      this.page = res.page;
      this.total = res.total;
      this.products = res.products;
    })
  } 

}
