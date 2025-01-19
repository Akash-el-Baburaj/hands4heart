import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-registration-form1',
  templateUrl: './registration-form1.component.html',
  styleUrls: ['./registration-form1.component.css'],
  standalone: false,
  // imports: [
  //   // RegistrationForm1Component,
  //   ReactiveFormsModule
  // ],
  
})
export class RegistrationForm1Component implements OnInit {

  signUpForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  _initForm() {
    this.signUpForm = this.fb.group({
      full_name: ['' , Validators.required],
      mob: ['', Validators.required],
      code: [''],
      email: [''],
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
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

}
