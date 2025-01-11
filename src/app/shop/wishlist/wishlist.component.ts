import { Component } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  banner: any = {
    pagetitle: "Wishlist",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "Wishlist",
  }
  constructor() { }

  ngOnInit(): void {
    (function ($) {
      jQuery("input[name='demo_vertical2']").TouchSpin({
        verticalbuttons: true,
        verticalupclass: 'ti-plus',
        verticaldownclass: 'ti-minus'
      });
    })(jQuery);
  }
}
