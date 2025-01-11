import { Component } from '@angular/core';
interface type {
  img: string,
  title: string,
  titleUrl: string,
  price: number,
  priceDic: number
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  banner : any = {
		pagetitle: "Shop Grid 4",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Shop Grid 4",
	}	
  shopData: type[] = [
    {
      img: 'assets/images/product/item1.jpg',
      title: 'School Bag',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item2.jpg',
      title: 'Color Pencils',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item3.jpg',
      title: 'Pencils',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item4.jpg',
      title: 'Stapler',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item5.jpg',
      title: 'Project Book',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item6.jpg',
      title: 'Colorful Book',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item7.jpg',
      title: 'Notebook',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item2.jpg',
      title: 'Color Pencils',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item8.jpg',
      title: 'Project file<',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item9.jpg',
      title: 'Calculator',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item1.jpg',
      title: 'School Bag',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item2.jpg',
      title: 'Color Pencils',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item8.jpg',
      title: 'Project file<',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item3.jpg',
      title: 'Pencils',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item4.jpg',
      title: 'Stapler',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    },
    {
      img: 'assets/images/product/item5.jpg',
      title: 'Project Book',
      titleUrl: '/shop-product-details',
      price: 192,
      priceDic: 232
    }
  ]
}
