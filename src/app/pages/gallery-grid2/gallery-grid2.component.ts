import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-grid2',
  templateUrl: './gallery-grid2.component.html',
  styleUrls: ['./gallery-grid2.component.css']
})
export class GalleryGrid2Component {
  banner: any = {
    pagetitle: "Gallery Grid 2 Icon",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "Gallery Grid 2 Icon",
  }


  galleries: any[] = [
    {
      gallery_image: "assets/images/portfolio/image_1.jpg",
      title: "School Library",
      category: "Library",
      gallery_link: "javascript:void(0);",
    },
  ]

}
