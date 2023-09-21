import { Component } from '@angular/core';
import { APIService } from '../../connections/api.service';

@Component({
  selector: 'app-stores-list-page',
  templateUrl: './stores-list-page.component.html',
  styleUrls: ['./stores-list-page.component.css']
})
export class StoresListPageComponent {

  constructor(private api: APIService) {
    
  }
}
