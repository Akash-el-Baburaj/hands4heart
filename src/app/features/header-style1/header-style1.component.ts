import { Component } from '@angular/core';

@Component({
  selector: 'app-header-style1',
  templateUrl: './header-style1.component.html',
  styleUrls: ['./header-style1.component.css']
})
export class HeaderStyle1Component {
	banner : any = {
		pagetitle: "Header Style Topbar Primary",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Header Style Topbar Primary",
	}

	header : any = {
		header_class: "",
		logo_image: "assets/images/logo.png",
		title: "Blog grid 2",
	}
}
