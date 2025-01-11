import { Component } from '@angular/core';

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
}
