import { Component } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  banner: any = {
    pagetitle: "Checkout",
    bg_image: "assets/images/banner/bnr1.jpg",
    title: "Checkout",
  }
  constructor() { }

  ngOnInit(): void {
    (function ($) {
      jQuery('select').selectpicker();

    })(jQuery);
  }
}
