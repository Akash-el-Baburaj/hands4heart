import { Component, TemplateRef, ViewChild } from '@angular/core';
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
  @ViewChild('loginPromptModal') loginPromptModal!: TemplateRef<any>;


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

  // navigateTo(url: string) {
  //   this.router.navigate([url])
  // }

  navigateTo(url: string) {
    if (url === '/program' && !this.user) {
        this.openLoginPromptModal(this.loginPromptModal);
        return;
    }
    this.router.navigate([url]);
  }

    sidebarMenu: any[] = [
      {
        title: 'Home',
        route: '/'
  
      },
      {
      title: 'About Us',
      route: '/about-us'

    },
    {
      title: 'Program',
      route: '/program'
    },
    {
      title: 'Contact Us',
      route: '/contact_us',
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
      size: 'md',
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

  openLoginPromptModal(content: TemplateRef<NgbModal>): void {
    if (this.modalRef) return;
    this.modalRef = this.modalService.open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'sm',
        backdrop: true,
        centered: true,
        windowClass: 'custom-modal'
    });
    this.modalRef.result.then(
        (result) => {
            if (result === 'yes') this.navigateToLogin();
            this.modalRef = null;
        },
        () => this.modalRef = null
    );
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
