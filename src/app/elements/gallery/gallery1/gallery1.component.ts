import { Component } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.css']
})
export class Gallery1Component {
  ngOnInit(): void {
    (function ($) {
      jQuery('#lightgallery, .lightgallery').lightGallery({
        selector: '.check-km',
        loop: true,
        thumbnail: true,
        exThumbImage: 'data-exthumbimage'
      });
      jQuery('.gallery-carousel').owlCarousel({
        loop: false,
        autoplay: true,
        margin: 30,
        nav: true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        dots: false,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          991: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });
    })(jQuery);
  }
}
