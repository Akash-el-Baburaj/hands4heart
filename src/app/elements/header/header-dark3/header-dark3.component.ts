import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';

interface MenuType {
  title: string;
  menuClass?: string;
  subMenuClass?: string;
  subMenu?: {
    title: string;
    route?: string;
    img?: string;
    themeColor?: string;
    subSubMenu?: {
      title: string;
      route: string;
    }[]
  }[];
}

@Component({
  selector: 'app-header-dark3',
  templateUrl: './header-dark3.component.html',
  styleUrls: ['./header-dark3.component.css']
})
export class HeaderDark3Component {

  cssUrl: any = '';
  collapseToggle: boolean = false;
  searchToggle: boolean = false;
  toggleMenu: string = '';
  toggleSubMenu: string = '';
  currentHref: string = "";
  activeMenu: string = "";
  
  constructor(public router: Router, private backLocation: PlatformLocation, private location: Location) {
    router.events.subscribe((val: any) => {
      if (location.path() != '') {
        this.currentHref = location.path();
      } else {
        this.currentHref = 'Home'
      }
    });

    backLocation.onPopState(() => {   // back click get url
      this.handleActiveMenu(window.location.pathname);
    });
  }

  ngOnInit(): void {
    this.handleActiveMenu(this.currentHref);
  }


  themeColor(itme: any) {
    this.cssUrl = document.getElementById("cssFileUrl");
    this.cssUrl.setAttribute('href', 'assets/css/skin/skin-' + itme + '.css');
  }
  clickEvent() {
    this.collapseToggle = !this.collapseToggle;
  }
  searchOpen() {

    this.searchToggle = !this.searchToggle;
  }
  opneMenu(item: any) {
    if (this.toggleMenu != item.toString()) {
      this.toggleMenu = item.toString();
    } else {
      this.toggleMenu = ' ';
    }
  }
  opneSubMenu(item: any) {
    if (this.toggleSubMenu != item.toString()) {
      this.toggleSubMenu = item.toString();
    } else {
      this.toggleSubMenu = ' ';
    }
  }

 
  handleActiveMenu(val: any) {
    this.sidebarMenu.map((data: any, ind: any) => {

      data.subMenu?.map((item: any, ind: any) => {
        if (item.route == val) {
          this.activeMenu = data.title;
        }
        item.subSubMenu?.map((subTtme: any, ind: any) => {
          if (subTtme.route == val) {
            this.activeMenu = data.title;
          }
        })
      })
    })
  }

  sidebarMenu: MenuType[] = [
    {
      title: 'Home',
      menuClass: 'has-mega-menu homedemo',
      subMenuClass: 'mega-menu',
      subMenu: [
        {
          title: 'Home - University',
          route: '/home-university',
          img: 'assets/demo/index.jpg',
          themeColor: '1'
        },
        {
          title: 'Home - Kindergarten',
          route: '/home-kindergarten',
          img: 'assets/demo/index-2.jpg',
          themeColor: '2'
        },
        {
          title: 'Home - Collage',
          route: '/home-college',
          img: 'assets/demo/index-3.jpg',
          themeColor: '3'
        },
        {
          title: 'Home - Coaching',
          route: '/home-coaching',
          img: 'assets/demo/index-4.jpg',
          themeColor: '4'
        },
        {
          title: 'Home - School',
          route: '/home-school',
          img: 'assets/demo/index-5.jpg',
          themeColor: '2'
        },
        {
          title: 'Home - Online Courese',
          route: '/home-online-course',
          img: 'assets/demo/index-6.jpg',
          themeColor: '4'
        },
        {
          title: 'Home - Language School',
          route: '/home-language-school',
          img: 'assets/demo/index-7.jpg',
          themeColor: '3'
        },
        {
          title: 'Home - Kids School',
          route: '/home-kids-school',
          img: 'assets/demo/index-8.jpg',
          themeColor: '2'
        }
      ]
    },
    {
      title: 'Features',
      subMenuClass: 'sub-menu tab-content',
      subMenu: [
        {
          title: 'Header Light',
          subSubMenu: [
            {
              title: 'Header 1',
              route: '/header-style-1',
            },
            {
              title: 'Header 2',
              route: '/header-style-2',
            },
            {
              title: 'Header 3',
              route: '/header-style-3',
            },
            {
              title: 'Header 4',
              route: '/header-style-4',
            },
            {
              title: 'Header 5',
              route: '/header-style-5',
            },
            {
              title: 'Header 6',
              route: '/header-style-6',
            },
          ]
        },
        {
          title: 'Header Dark',
          subSubMenu: [
            {
              title: 'Header 1',
              route: '/header-style-dark-1',
            },
            {
              title: 'Header 2',
              route: '/header-style-dark-2',
            },
            {
              title: 'Header 3',
              route: '/header-style-dark-3',
            },
            {
              title: 'Header 4',
              route: '/header-style-dark-4',
            },
            {
              title: 'Header 5',
              route: '/header-style-dark-5',
            },
            {
              title: 'Header 6',
              route: '/header-style-dark-6',
            },
          ]
        },
        {
          title: 'Footer',
          subSubMenu: [
            {
              title: 'Footer 1',
              route: '/footer-1',
            },
            {
              title: 'Footer 2',
              route: '/footer-2',
            },
            {
              title: 'Footer 3',
              route: '/footer-3',
            },
            {
              title: 'Footer 4',
              route: '/footer-4',
            },
            {
              title: 'Footer 5',
              route: '/footer-5',
            },
            {
              title: 'Footer 6',
              route: '/footer-6',
            },
            {
              title: 'Footer 7',
              route: '/footer-7',
            },
            {
              title: 'Footer 8',
              route: '/footer-8',
            },
            {
              title: 'Footer 9',
              route: '/footer-9',
            },
            {
              title: 'Footer 10',
              route: '/footer-10',
            },
            {
              title: 'Footer 11',
              route: '/footer-11',
            },
            {
              title: 'Footer 12',
              route: '/footer-12',
            },
          ]
        }
      ]
    },
    {
      title: 'Pages',
      menuClass: 'has-mega-menu',
      subMenuClass: 'mega-menu',
      subMenu: [
        {
          title: 'Pages',
          subSubMenu: [
            {
              title: 'About us 1',
              route: '/about-1',
            },
            {
              title: 'About us 2',
              route: '/about-2',
            },
            {
              title: 'Services 1',
              route: '/services-1',
            },
            {
              title: 'Services 2',
              route: '/services-2',
            },
            {
              title: 'Faqs',
              route: '/faq-1',
            }
          ]
        },
        {
          title: 'Pages',
          subSubMenu: [
            {
              title: 'Teachers',
              route: '/teacher',
            },
            {
              title: 'Teachers Profile',
              route: '/teachers-profile',
            },
            {
              title: 'Courses',
              route: '/courses',
            },
            {
              title: 'Courses Details',
              route: '/courses-details',
            },
            {
              title: 'Events',
              route: '/event',
            }
          ]
        },
        {
          title: 'Pages',
          subSubMenu: [
            {
              title: 'Events Details',
              route: '/event-details',
            },
            {
              title: 'Help Desk',
              route: '/help-desk',
            },
            {
              title: 'Privacy Policy',
              route: '/privacy-policy',
            },
            {
              title: 'Error-404',
              route: '/error-404',
            },
            {
              title: 'Error-405',
              route: '/error-405',
            }
          ]
        },
        {
          title: 'Pages',
          subSubMenu: [
            {
              title: 'Gallery Grid 2',
              route: '/gallery-grid-2',
            },
            {
              title: 'Gallery Grid 3',
              route: '/gallery-grid-3',
            },
            {
              title: 'Gallery Grid 4',
              route: '/gallery-grid-4',
            }
          ]
        }
      ]
    },
    {
      title: 'Shop',
      subMenuClass: 'sub-menu',
      subMenu: [
        {
          title: 'Shop',
          route: '/shop'
        },
        {
          title: 'Shop Sidebar',
          route: '/shop-sidebar',
        },
        {
          title: 'Product Details',
          route: '/shop-product-details',
        },
        {
          title: 'Cart',
          route: '/shop-cart',
        },
        {
          title: 'Wishlist',
          route: '/shop-wishlist',
        },
        {
          title: 'Checkout',
          route: '/shop-checkout',
        },
        {
          title: 'Login',
          route: '/shop-login',
        },
        {
          title: 'Register',
          route: '/shop-register',
        }
      ]
    },
    {
      title: 'Blog',
      menuClass: 'has-mega-menu',
      subMenuClass: 'mega-menu',
      subMenu: [
        {
          title: 'Blog',
          subSubMenu: [
            {
              title: 'Half image',
              route: '/blog-half-img',
            },
            {
              title: 'Half image sidebar',
              route: '/blog-half-img-sidebar',
            },
            {
              title: 'Half image sidebar',
              route: '/blog-half-img-left-sidebar',
            },
            {
              title: 'Large image',
              route: '/blog-large-img',
            }
          ]
        },
        {
          title: 'Blog',
          subSubMenu: [
            {
              title: 'Large image sideba',
              route: '/blog-large-img-sidebar',
            },
            {
              title: 'Large image sidebar left',
              route: '/blog-large-img-left-sidebar',
            },
            {
              title: 'Grid 2',
              route: '/blog-grid-2',
            },
            {
              title: 'Grid 2 sidebar',
              route: '/blog-grid-2-sidebar',
            }
          ]
        },
        {
          title: 'Blog',
          subSubMenu: [
            {
              title: 'Grid 2 sidebar left',
              route: '/blog-grid-2-sidebar-left',
            },
            {
              title: 'Grid 3',
              route: '/blog-grid-3',
            },
            {
              title: 'Grid 3 sidebar',
              route: '/blog-grid-3-sidebar',
            },
            {
              title: 'Grid 3 sidebar left',
              route: '/blog-grid-3-sidebar-left',
            }
          ]
        },
        {
          title: 'Blog',
          subSubMenu: [
            {
              title: 'Grid 4',
              route: '/blog-grid-4',
            },
            {
              title: 'Single',
              route: '/blog-single',
            },
            {
              title: 'Single sidebar',
              route: '/blog-single-sidebar',
            },
            {
              title: 'Single sidebar right',
              route: '/blog-single-left-sidebar',
            }
          ]
        }
      ]
    },
    {
      title: 'Contact Us',
      subMenuClass: 'sub-menu right',
      subMenu: [
        {
          title: 'Contact us 1',
          route: '/contact-1',
        },
        {
          title: 'Contact us 2',
          route: '/contact-2',
        },
        {
          title: 'Contact us 3',
          route: '/contact-3',
        },
        {
          title: 'Contact us 4',
          route: '/contact-4',
        }
      ]
    }
  ]
}
