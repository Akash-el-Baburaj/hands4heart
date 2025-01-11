import { Component } from '@angular/core';
declare var jQuery: any;
declare var handleowlCarousel: any;
declare var handleStarRating: any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  banner: any = {

    pagetitle: "Product Details",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Product Details",
  }

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      handleowlCarousel();
      handleStarRating();
    })(jQuery);
  }

}
