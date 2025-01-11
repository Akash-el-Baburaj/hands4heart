import { Component } from '@angular/core';

@Component({
  selector: 'app-home-kindergarten',
  templateUrl: './home-kindergarten.component.html',
  styleUrls: ['./home-kindergarten.component.css']
})
export class HomeKindergartenComponent {
  header : any = {
		header_class: "bg-primary text-white",
		logo_image: "assets/images/logo-2.png",
	}
  scroll_top() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
