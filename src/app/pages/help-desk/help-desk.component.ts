import { Component } from '@angular/core';

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent {
  banner : any = {
		pagetitle: "Help Desk",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Help Desk",
	}
}
