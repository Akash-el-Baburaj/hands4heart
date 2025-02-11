import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  banner : any = {
		pagetitle: "Register",
		bg_image: "assets/images/banner/bnr5.jpg",
		title: "Register",
	}

  
    signUpForm!: FormGroup
    signInForm!: FormGroup
    otpValidateForm!: FormGroup
    regForm: boolean = true;
    otpForm: boolean = false;
    otp: any;
    otpKey: any;
    userID: any;
    user: any | null = null;
  
    constructor(
      private router: Router,
      private fb: FormBuilder,
      private authService: AuthenticationService
    ) {}
  
    ngOnInit(): void {
      this._initForm();
      this._initSignInForm();
      this._initSignInForm();
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
  
    onSubmit() {
      if (this.signUpForm.valid) {
        const formData = new FormData();
        formData.append('full_name', this.signUpForm.value.full_name);
        formData.append('mob', this.signUpForm.value.mob);
        formData.append('code', this.signUpForm.value.code);
        formData.append('email', this.signUpForm.value.email);
        this.authService.signUp(formData).subscribe({
          next: (res: any) => {
            console.log('res from reg form',res);
            if (res.success) {
              this.otpForm = true;
              this.regForm = false;
              const DATA = res.data;
              this.userID - DATA.user_id;
              this.otp = DATA.otp;
              this.otpKey = DATA.otpKey;
              this.pathOTPForm(this.otp);
            }
          },
          error: (err: any) => {
            console.log(err);
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
              const DATA = res.data;
              this.userID - DATA.user_id;
              this.otp = DATA.otp;
              this.otpKey = DATA.otpKey;
              this.pathOTPForm(this.otp)
              this._initOtpForm();
              this.otpForm = true;
              this.regForm = false;
            } else {
              // this.toastr.error(res.message);
              // this.isInValidUser = true;
              // this.inValidMessage = res.message;
            }
          }
        })
      }
    }
  
    pathOTPForm(data: any) {
      this.otpValidateForm.patchValue({
        otp: data.otp,
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
              // this.toastr.success(res.message);
              localStorage.setItem('userId', res.data.user_id);
              localStorage.setItem('token', res.data.key);
              this.getUserDetails();
              this.router.navigate(['/program']);
              this.otpForm = false;
              this.regForm = true;
            } else {
              // this.toastr.error(res.message);
              // this.isInValidOtp = true;
              // this.inValidOtpMessage = res.message;
            }
          },
          error: (err: any) => {
            console.error(err);
            console.error(err.error.message);
            // this.toastr.success(err.error.message);
  
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
