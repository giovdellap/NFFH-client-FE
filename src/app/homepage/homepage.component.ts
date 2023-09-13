import { Component } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  images: string[] = []
  constructor() {
    this.images = [1, 2, 3].map((n) => `assets/media/hp-carousel-${n}.jpg`);
    console.log(this.images)
  }


}
