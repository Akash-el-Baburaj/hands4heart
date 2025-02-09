import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/service/authentication.service';

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
  selector: 'app-header-light4',
  templateUrl: './header-light4.component.html',
  styleUrls: ['./header-light4.component.css']
})
export class HeaderLight4Component {

  cssUrl: any = '';
  collapseToggle: boolean = false;
  searchToggle: boolean = false;
  toggleMenu: string = '';
  toggleSubMenu: string = '';
  currentHref: string = "";
  activeMenu: string = "";
  modalRef!: NgbModalRef | null;
  signinForm!: FormGroup;
  user: any | null = null;

  constructor(
    public router: Router,
    private backLocation: PlatformLocation,
    private location: Location,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    router.events.subscribe((val: any) => {
      if (location.path() != '') {
        this.currentHref = location.path();
      } else {
        this.currentHref = 'Home'
      }
      this.user = localStorage.getItem('userId') ? localStorage.getItem('userId') : null;
    });

    backLocation.onPopState(() => {   // back click get url
      this.handleActiveMenu(window.location.pathname);
    });

    this.themeColor('4');
  }

  ngOnInit(): void {
    this.getUserProfile();
    this.handleActiveMenu(this.currentHref);
    this._initForm();
    this.couserScreenEnable();
  }

  _initForm() {
    this.signinForm = this.fb.group({
      phone: ['', Validators.required],
    });
  }

  couserScreenEnable() {
    const coursesMenu = this.sidebarMenu.find((menu) => menu.title === 'Courses');
    if (coursesMenu) {
      if (this.user.length > 0) {
        coursesMenu.subMenu = [
          ...coursesMenu.subMenu,
          { title: 'My Courses', route: '/my-courses' },
          // { title: 'Enrolled Courses', route: '/enrolled-courses' }
        ];
      }
    }

    // if (this.user.length > 0) {
    //   this.sidebarMenu.splice(2, 0, {
    //     title: 'AssessMent',
    //     route: '/assessment'
    //   });
    // }
  }

  getUserProfile() {
    this.authService.getUserProfile().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.user = res.data
        }
      }
    })
  }

  logOUt() {
    this.user = [];
    this.couserScreenEnable();
    this.authService.logout();
    localStorage.clear();
    this.navigateTo('')
    this.modalRef?.close();
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

  navigateTo(url: string) {
    this.router.navigate([url])
  }

  // sidebarMenu: MenuType[] = [
    sidebarMenu: any[] = [
    {
      title: 'About Us',
      // route: '/blog-half-img',
      // subMenuClass: 'sub-menu tab-content',
      // subMenu: [
      //   {
      //     title: 'Header Light',
      //     subSubMenu: [
      //       {
      //         title: 'Header 1',
      //         // route: '/header-style-1',
      //       },
      //       {
      //         title: 'Header 2',
      //         // route: '/header-style-2',
      //       },
      //       {
      //         title: 'Header 3',
      //         // route: '/header-style-3',
      //       },
      //       {
      //         title: 'Header 4',
      //         // route: '/header-style-4',
      //       },
      //       {
      //         title: 'Header 5',
      //         // route: '/header-style-5',
      //       },
      //       {
      //         title: 'Header 6',
      //         // route: '/header-style-6',
      //       },
      //     ]
      //   },
      //   {
      //     title: 'Header Dark',
      //     subSubMenu: [
      //       {
      //         title: 'Header 1',
      //         // route: '/header-style-dark-1',
      //       },
      //       {
      //         title: 'Header 2',
      //         // route: '/header-style-dark-2',
      //       },
      //       {
      //         title: 'Header 3',
      //         // route: '/header-style-dark-3',
      //       },
      //       {
      //         title: 'Header 4',
      //         // route: '/header-style-dark-4',
      //       },
      //       {
      //         title: 'Header 5',
      //         // route: '/header-style-dark-5',
      //       },
      //       {
      //         title: 'Header 6',
      //         // route: '/header-style-dark-6',
      //       },
      //     ]
      //   },
      //   {
      //     title: 'Footer',
      //     subSubMenu: [
      //       {
      //         title: 'Footer 1',
      //         // route: '/footer-1',
      //       },
      //       {
      //         title: 'Footer 2',
      //         // route: '/footer-2',
      //       },
      //       {
      //         title: 'Footer 3',
      //         // route: '/footer-3',
      //       },
      //       {
      //         title: 'Footer 4',
      //         // route: '/footer-4',
      //       },
      //       {
      //         title: 'Footer 5',
      //         // route: '/footer-5',
      //       },
      //       {
      //         title: 'Footer 6',
      //         // route: '/footer-6',
      //       },
      //       {
      //         title: 'Footer 7',
      //         // route: '/footer-7',
      //       },
      //       {
      //         title: 'Footer 8',
      //         // route: '/footer-8',
      //       },
      //       {
      //         title: 'Footer 9',
      //         // route: '/footer-9',
      //       },
      //       {
      //         title: 'Footer 10',
      //         // route: '/footer-10',
      //       },
      //       {
      //         title: 'Footer 11',
      //         // route: '/footer-11',
      //       },
      //       {
      //         title: 'Footer 12',
      //         // route: '/footer-12',
      //       },
      //     ]
      //   }
      // ]
    },
    {
      title: 'Program',
      route: '/program'
    },
    // {
    //   title: 'Courses',
    //   subMenuClass: 'sub-menu',
    //   subMenu: [
    //     { title: 'All Courses', route: '/courses' }
    //   ] // Initially empty, dynamically updated
    // },
    // {
    //   title: 'Pages',
    //   menuClass: 'has-mega-menu',
    //   subMenuClass: 'mega-menu',
    //   subMenu: [
    //     {
    //       title: 'Pages',
    //       subSubMenu: [
    //         {
    //           title: 'About us 1',
    //           // route: '/about-1',
    //         },
    //         {
    //           title: 'About us 2',
    //           // route: '/about-2',
    //         },
    //         {
    //           title: 'Services 1',
    //           // route: '/services-1',
    //         },
    //         {
    //           title: 'Services 2',
    //           // route: '/services-2',
    //         },
    //         {
    //           title: 'Faqs',
    //           // route: '/faq-1',
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Pages',
    //       subSubMenu: [
    //         {
    //           title: 'Teachers',
    //           // route: '/teacher',
    //         },
    //         {
    //           title: 'Teachers Profile',
    //           // route: '/teachers-profile',
    //         },
    //         {
    //           title: 'Courses',
    //           // route: '/courses',
    //         },
    //         {
    //           title: 'Courses Details',
    //           // route: '/courses-details',
    //         },
    //         {
    //           title: 'Events',
    //           // route: '/event',
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Pages',
    //       subSubMenu: [
    //         {
    //           title: 'Events Details',
    //           // route: '/event-details',
    //         },
    //         {
    //           title: 'Help Desk',
    //           // route: '/help-desk',
    //         },
    //         {
    //           title: 'Privacy Policy',
    //           // route: '/privacy-policy',
    //         },
    //         {
    //           title: 'Error-404',
    //           // route: '/error-404',
    //         },
    //         {
    //           title: 'Error-405',
    //           // route: '/error-405',
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Pages',
    //       subSubMenu: [
    //         {
    //           title: 'Gallery Grid 2',
    //           // route: '/gallery-grid-2',
    //         },
    //         {
    //           title: 'Gallery Grid 3',
    //           // route: '/gallery-grid-3',
    //         },
    //         {
    //           title: 'Gallery Grid 4',
    //           // route: '/gallery-grid-4',
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   title: 'Shop',
    //   subMenuClass: 'sub-menu',
    //   subMenu: [
    //     {
    //       title: 'Shop',
    //       // route: '/shop'
    //     },
    //     {
    //       title: 'Shop Sidebar',
    //       // route: '/shop-sidebar',
    //     },
    //     {
    //       title: 'Product Details',
    //       // route: '/shop-product-details',
    //     },
    //     {
    //       title: 'Cart',
    //       // route: '/shop-cart',
    //     },
    //     {
    //       title: 'Wishlist',
    //       // route: '/shop-wishlist',
    //     },
    //     {
    //       title: 'Checkout',
    //       // route: '/shop-checkout',
    //     },
    //     {
    //       title: 'Login',
    //       // route: '/shop-login',
    //     },
    //     {
    //       title: 'Register',
    //       // route: '/shop-register',
    //     }
    //   ]
    // },
    // {
    //   title: 'Blog',
    //   menuClass: 'has-mega-menu',
    //   subMenuClass: 'mega-menu',
    //   subMenu: [
    //     {
    //       title: 'Blog',
    //       subSubMenu: [
    //         {
    //           title: 'Half image',
    //           // route: '/blog-half-img',
    //         },
    //         {
    //           title: 'Half image sidebar',
    //           // route: '/blog-half-img-sidebar',
    //         },
    //         {
    //           title: 'Half image sidebar',
    //           // route: '/blog-half-img-left-sidebar',
    //         },
    //         {
    //           title: 'Large image',
    //           // route: '/blog-large-img',
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Blog',
    //       subSubMenu: [
    //         {
    //           title: 'Large image sideba',
    //           // route: '/blog-large-img-sidebar',
    //         },
    //         {
    //           title: 'Large image sidebar left',
    //           // route: '/blog-large-img-left-sidebar',
    //         },
    //         {
    //           title: 'Grid 2',
    //           // route: '/blog-grid-2',
    //         },
    //         {
    //           title: 'Grid 2 sidebar',
    //           // route: '/blog-grid-2-sidebar',
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Blog',
    //       subSubMenu: [
    //         {
    //           title: 'Grid 2 sidebar left',
    //           // route: '/blog-grid-2-sidebar-left',
    //         },
    //         {
    //           title: 'Grid 3',
    //           // route: '/blog-grid-3',
    //         },
    //         {
    //           title: 'Grid 3 sidebar',
    //           // route: '/blog-grid-3-sidebar',
    //         },
    //         {
    //           title: 'Grid 3 sidebar left',
    //           // route: '/blog-grid-3-sidebar-left',
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Blog',
    //       subSubMenu: [
    //         {
    //           title: 'Grid 4',
    //           // route: '/blog-grid-4',
    //         },
    //         {
    //           title: 'Single',
    //           // route: '/blog-single',
    //         },
    //         {
    //           title: 'Single sidebar',
    //           // route: '/blog-single-sidebar',
    //         },
    //         {
    //           title: 'Single sidebar right',
    //           // route: '/blog-single-left-sidebar',
    //         }
    //       ]
    //     }
    //   ]
    // },
    {
      title: 'Contact Us',
      route: '/contact-1',
      // subMenu: [
      //   {
      //     title: 'Contact us 1',
      //     // route: '/contact-1',
      //   },
      //   {
      //     title: 'Contact us 2',
      //     // route: '/contact-2',
      //   },
      //   {
      //     title: 'Contact us 3',
      //     // route: '/contact-3',
      //   },
      //   {
      //     title: 'Contact us 4',
      //     // route: '/contact-4',
      //   }
      // ]
    }
    ]
  
  navigateToLogin() {
    this.router.navigate(['/user/login']);
  }

  navigateToAbout(url: string): void {
    if (url.includes('#')) {
      const [path, hash] = url.split('#');
      this.router.navigate([path]).then(() => {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    } else {
      this.router.navigate([url]);
    }
  }
  
  openVerticallyCentered(content: TemplateRef<NgbModal>): void {
    if (this.modalRef) {
      console.log('Modal is already open');
      return;
    }

    this.modalRef = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'md',
      backdrop: false,
      centered: true,
      windowClass: 'custom-modal'
    });

    this.modalRef.result
      .then(
        () => {
          // Modal closed
          this.modalRef = null;
        },
        () => {
          // Modal dismissed
          this.modalRef = null;
        }
      );
    //  this.modalService.open(content, { centered: true, backdrop: false, keyboard: false, windowClass: 'custom-modal', size: 'sm' });
    
  }

  openLogoutModal(content: TemplateRef<NgbModal>): void {
    if (this.modalRef) {
      console.log('Modal is already open');
      return;
    }

    this.modalRef = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'sm',
      backdrop: true,
      centered: true,
      windowClass: 'custom-modal'
    });
    // this.collapseToggle = false;
    this.modalRef.result
      .then(
        () => {
          // Modal closed
          this.modalRef = null;
        },
        () => {
          // Modal dismissed
          this.modalRef = null;
        }
      );
    //  this.modalService.open(content, { centered: true, backdrop: false, keyboard: false, windowClass: 'custom-modal', size: 'sm' });
    
  }
  
  //  openModal(content: any) {
  //   if (this.modalRef) {
  //     console.log('Modal is already open');
  //     return;
  //   }

  //   this.modalRef = this.modalService.open(content, {
  //     ariaLabelledBy: 'modal-basic-title',
  //     size: 'lg',
  //     backdrop: 'static',
  //   });

  //   this.modalRef.result
  //     .then(
  //       () => {
  //         // Modal closed
  //         this.modalRef = null;
  //       },
  //       () => {
  //         // Modal dismissed
  //         this.modalRef = null;
  //       }
  //     );
  // }
}
