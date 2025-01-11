import { Component } from '@angular/core';
declare var jQuery: any;
interface type{
  img: string,
  title: string,
  price: number, 
  unitPrice: number
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  banner: any = {
    pagetitle: "Shop Cart",
    bg_image: "assets/images/banner/bnr3.jpg",
    title: "Cart",
  }
  constructor() { }

  ngOnInit(): void {
    (function ($) {
      jQuery("input[name='demo_vertical2']").TouchSpin({
        verticalbuttons: true,
        verticalupclass: 'ti-plus',
        verticaldownclass: 'ti-minus'
      });
      jQuery('select').selectpicker();

    })(jQuery);
  }

  cartData:type[] = [
    {
      img: 'assets/images/product/thumb/item1.jpg',
      title: 'Color Pencils',
      price: 28.00,
      unitPrice: 28.00
    },
    {
      img: 'assets/images/product/thumb/item2.jpg',
      title: 'Marker Pencils',
      price: 28.00,
      unitPrice: 28.00
    },
    {
      img: 'assets/images/product/thumb/item3.jpg',
      title: 'Normal Pencils',
      price: 28.00,
      unitPrice: 28.00
    },
    {
      img: 'assets/images/product/thumb/item4.jpg',
      title: 'Calculator',
      price: 28.00,
      unitPrice: 28.00
    },
    {
      img: 'assets/images/product/thumb/item5.jpg',
      title: 'Marker',
      price: 28.00,
      unitPrice: 28.00
    },
    {
      img: 'assets/images/product/thumb/item3.jpg',
      title: 'Normal Pencils',
      price: 28.00,
      unitPrice: 28.00
    }
  ]
}
