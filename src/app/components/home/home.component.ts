import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { productsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
// Main Slider
mainSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  autoplay:true,
  autoplayTimeout:5000,
  navSpeed: 700,
  responsive: {
      0: {
          items: 1,
      },
  },
};
// CategorySlider
categories: any[] = [];

constructor(private _productsService: productsService) {
  // Do not Write in constructor
}
ngOnInit(): void {
  this._productsService.getCategories().subscribe({
    next: (res) => {
      this.categories = res.data;
    },
  });
}

// slider
categorySlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  autoplayTimeout:5000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 2,
    },

    800: {
      items: 3,
    },
    940: {
      items: 7,
    },
  },
};

}
