import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {
  banner : any = {
		pagetitle: "Privacy Policy",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Privacy Policy",
	}
}
