import { Component } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-owl-slider1',
  templateUrl: './owl-slider1.component.html',
  styleUrls: ['./owl-slider1.component.css']
})
export class OwlSlider1Component {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      jQuery('.img-carousel-content').owlCarousel({
        loop: true,
        autoplaySpeed: 3000,
        navSpeed: 3000,
        paginationSpeed: 3000,
        slideSpeed: 3000,
        smartSpeed: 3000,
        autoplay: 3000,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          1024: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
      });
    })(jQuery);
  }
}
