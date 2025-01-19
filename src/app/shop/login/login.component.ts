import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { login, otpVarification } from 'src/app/core/model/auth.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  banner : any = {
		pagetitle: "Login",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Login",
  }

  loginForm!: FormGroup;
  otpForm!: FormGroup;
  userID: any;
  user: any | null = null;
  isInValidUser: boolean = false;
  isInValidOtp: boolean = false;
  inValidMessage: string = '';
  inValidOtpMessage: string = '';
  otp: any;
  otpKey: any;
  showOtpForm: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this._initLoginForm();
    this._initOtpForm();
  }

  _initLoginForm() {
    this.loginForm = this.fb.group({
      phone: ['', Validators.required],
    })
  }

  _initOtpForm() {
    this.otpForm = this.fb.group({
      otp: [this.otp ?? '', Validators.required]
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      const formData = new FormData();
      formData.append('phone', this.loginForm.value.phone);
      this.authService.login(formData).subscribe({
        next: (res) => {
          console.log(res);
          if (res.success) {
            const DATA = res.data;
            this.userID - DATA.user_id;
            this.otp = DATA.otp;
            this.otpKey = DATA.otpKey;
            this.pathOTPForm(this.otp)
            this._initOtpForm();
            this.showOtpForm = true;
            this.isInValidUser = false;
          } else {
            this.toastr.error(res.message);
            this.isInValidUser = true;
            this.inValidMessage = res.message;
          }
        }
      })
    }
  }

  pathOTPForm(data: any) {
    this.otpForm.patchValue({
      otp: data.otp,
    });
  }

  verifyOTP() {
    if (this.otpForm.valid) {
      const formData = new FormData();
      formData.append('otp', this.otpForm.value.otp);
      formData.append('otpKey', this.otpKey);
      this.authService.otpVerification(formData).subscribe({
        next: (res) => {
          console.log(res);
          if (res.success) {
            this.toastr.success(res.message);
            localStorage.setItem('userId', res.data.user_id);
            localStorage.setItem('token', res.data.key);
            this.getUserDetails();
            this.router.navigate(['/home-coaching']);
            this.isInValidOtp = false;
          } else {
            this.toastr.error(res.message);
            this.isInValidOtp = true;
            this.inValidOtpMessage = res.message;
          }
        },
        error: (err) => {
          console.error(err);
          console.error(err.error.message);
          this.toastr.success(err.error.message);

        }
      })
    }
  }

  getUserDetails() {
    this.authService.getUserProfile().subscribe({
      next: (res) => {
        this.user = res.data;
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    })
  }

  activateForgotPasswordTab() {
    // Get the tab and activate it
    const forgotPasswordTab = document.querySelector('#otp');
    if (forgotPasswordTab) {
      // Activate the tab, typically you can use a framework like Bootstrap to handle this
      forgotPasswordTab.classList.add('active');
    }
  }
 

}
