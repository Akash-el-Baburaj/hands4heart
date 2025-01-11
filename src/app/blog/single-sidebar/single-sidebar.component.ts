import { Component } from '@angular/core';

@Component({
  selector: 'app-single-sidebar',
  templateUrl: './single-sidebar.component.html',
  styleUrls: ['./single-sidebar.component.css']
})
export class SingleSidebarComponent {
  banner : any = {	
		pagetitle: "Blog single with sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog single with sidebar",
	}

	layout : any = {	
		sidebar: true,
		sidebarPosition:"right",
		container_class:""
	}
}
