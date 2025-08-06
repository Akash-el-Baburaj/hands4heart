import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/service/services/toast.service';

@Component({
  selector: 'app-contact-us1',
  templateUrl: './contact-us1.component.html',
  styleUrls: ['./contact-us1.component.css']
})
export class ContactUs1Component {
  banner: any = {
    pagetitle: "Contact Us",
    bg_image: "assets/images/banner/bnr3.jpg",
    title: "Contact Us",
  }

    contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder,    private toastr: ToastService,
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('***contact us form**')
    if (this.contactForm.valid) {

          this.toastr.success("Thank you for contacting us. We'll get back to you soon!", 'Success');

      // Send form data to backend here if needed

      // Show thank you message
      this.formSubmitted = true;

      // Reset the form
      this.contactForm.reset();

      // Optional: hide message after a few seconds
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    }
  }
}
