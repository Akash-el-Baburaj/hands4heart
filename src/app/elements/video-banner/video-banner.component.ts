import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Banner, Banners } from 'src/app/core/model/banners.model';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { UsersService } from 'src/app/core/service/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/service/services/alert.service';
import { ToastService } from 'src/app/core/service/services/toast.service';

@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css']
})
export class VideoBannerComponent implements OnInit {
  activeIndex = 0;
  banners: Banner[] = [];
  page: number = 1;
  currentIndex = 0;
  user: any | null = null;
  modalRef!: NgbModalRef | null;
  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  otpValidateForm!: FormGroup;
  regForm: boolean = true;
  otpForm: boolean = false;
  otp: any;
  otpKey: any;
  userID: any;

  constructor(
    private sanitizer: DomSanitizer, 
    private userService: UsersService, 
    private modalService: NgbModal,
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private toast: ToastService,
    private alertService: AlertService,
  ) {
    this.user = localStorage.getItem('userId') ? localStorage.getItem('userId') : null;
  }

  ngOnInit(): void {
    this.getBanner();
    this._initForm();
    this._initSignInForm();
    this._initOtpForm();
  }

  _initForm() {
      this.signUpForm = this.fb.group({
        full_name: ['' , Validators.required],
        mob: ['', Validators.required],
        code: ['+91'],
        email: [''],
      })
    }
  
    _initSignInForm() {
      this.signInForm = this.fb.group({
        phone: ['', Validators.required]
      })
    }
  
    _initOtpForm() {
      this.otpValidateForm = this.fb.group({
        otp: [this.otp ?? '', Validators.required]
      })
    }

  getBanner() {
    this.userService.getBanners(this.page).subscribe({
      next: (res: Banners) => {
        if (res.success) {
          this.banners = res.data.banner;
        }
      },
      error: (err) => console.error('Error fetching banners:', err)
    });
  }


  get currentBanner() {
    return this.banners[this.currentIndex];
  }

  isExternalVideo(url: string): boolean {
    return url.includes('youtube') || url.includes('vimeo');
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    if(url.includes('youtube')) {
      const videoId = url.split('v=')[1];
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`
      );
    }
    if(url.includes('vimeo')) {
      const videoId = url.split('/').pop();
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1`
      );
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  changeBanner(direction: number) {
    this.currentIndex = (this.currentIndex + direction + this.banners.length) % this.banners.length;
    this.animateBannerChange();
  }

  animateBannerChange() {
    // Add your animation logic here
    const container = document.querySelector('.banner-media');
    container?.classList.add('parallax-effect');
    setTimeout(() => {
      container?.classList.remove('parallax-effect');
    }, 500);
  }
  navigateTo(url: string): void {
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
  navigateToLogin(from?: string) {
    this.router.navigate(['/user/login']);
    if (from === 'fromSignUp') {
      this.modalRef?.close()
    }
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

    logOUt() {
      this.user = [];
      this.authService.logout();
      localStorage.clear();
      this.navigateTo('')
      this.modalRef?.close();
    }

    openAuthModal(content: TemplateRef<NgbModal>): void {
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

    onSubmit() {
      if (this.signUpForm.valid) {
        const formData = new FormData();
        formData.append('full_name', this.signUpForm.value.full_name);
        formData.append('mob', this.signUpForm.value.mob);
        formData.append('code', this.signUpForm.value.code);
        formData.append('email', this.signUpForm.value.email);
        this.authService.signUp(formData).subscribe({
          next: (res: any) => {
            console.log(res);
            if (res.success) {
              this.toast.success('Success!', res.message);
              this.otpForm = true;
              this.regForm = false;
              const DATA = res.data;
              this.userID - DATA.user_id;
              this.otp = DATA.otp;
              this.otpKey = DATA.otpKey;
              this.pathOTPForm(this.otp);
  
            } else {
              this.toast.error('Error!', res.message);
            }
          },
          error: (err: any) => {
            console.log(err);
            this.alertService.error('Error!', err.error.message);
  
          }
        })
      }
    }
  
    onLogin() {
      if (this.signInForm.valid) {
        const formData = new FormData();
        formData.append('phone', this.signInForm.value.phone);
        this.authService.login(formData).subscribe({
          next: (res: any) => {
            if (res.success) {
              this.toast.success('Success!', res.message);
              const DATA = res.data;
              this.userID - DATA.user_id;
              this.otp = DATA.otp;
              this.otpKey = DATA.otpKey;
              this.pathOTPForm(this.otp)
              this._initOtpForm();
              this.otpForm = true;
              this.regForm = false;
  
            } else {
              this.toast.error('ERROR!', res.message);
  
              // this.toastr.error(res.message);
              // this.isInValidUser = true;
              // this.inValidMessage = res.message;
            }
          },
          error: (err: any) => {
            console.log(err);
            this.alertService.error('Error!', err.error.message);
  
          }
        })
      }
    }
  
    pathOTPForm(data: any) {
      this.otpValidateForm.patchValue({
        otp: data,
      });
    }
  
    verifyOTP() {
      if (this.otpValidateForm.valid) {
        const formData = new FormData();
        formData.append('otp', this.otpValidateForm.value.otp);
        formData.append('otpKey', this.otpKey);
        this.authService.otpVerification(formData).subscribe({
          next: (res: any) => {
            if (res.success) {
              this.alertService.success('Success!', res.message);
  
              // this.toastr.success(res.message);
              localStorage.setItem('userId', res.data.user_id);
              localStorage.setItem('token', res.data.key);
              this.getUserDetails();
              this.router.navigate(['/program']);
              this.otpForm = false;
              this.regForm = true;
  
            } else {
              this.toast.error('Error!', res.message);
  
              // this.toastr.error(res.message);
              // this.isInValidOtp = true;
              // this.inValidOtpMessage = res.message;
            }
          },
          error: (err: any) => {
            console.error(err);
            console.error(err.error.message);
            // this.toastr.success(err.error.message);
            this.alertService.error('Error!', err.error.message);
  
          }
        })
      }
    }
  
    loginForm(){
      this.regForm = false;
      this.otpForm = false;
    }
  
    getUserDetails() {
      this.authService.getUserProfile().subscribe({
        next: (res: any) => {
          this.user = res.data;
          localStorage.setItem('user', JSON.stringify(this.user));
        }
      })
    }
}


declare var $: any;

// In animateBannerChange()
$('.banner-media').animate({
  opacity: 0.5
}, 300).animate({
  opacity: 1
}, 300);