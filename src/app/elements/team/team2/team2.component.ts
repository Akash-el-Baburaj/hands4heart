import { Component } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.css']
})
export class Team2Component {
  ngOnInit(): void {
    (function ($) {
      jQuery('.kinder-carousel').owlCarousel({
        loop: true,
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
            items: 3
          },
          1000: {
            items: 4
          }
        }
      })
    })(jQuery);
  }
}
