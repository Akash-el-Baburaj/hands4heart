import { Component } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  banner: any = {
    pagetitle: "Blog single without sidebar",
    bg_image: "assets/images/banner/bnr1.jpg",
    title: "Blog single without sidebar",
  }

  layout: any = {
    sidebar: false,
    sidebarPosition: "",
    container_class: "min-container"
  }
}
