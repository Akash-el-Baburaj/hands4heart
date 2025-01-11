import { Component } from '@angular/core';
declare var jQuery: any;
declare var handleMasonryFilter2: any;
declare var handleLightGallery: any;

@Component({
  selector: 'app-gallery-grid4',
  templateUrl: './gallery-grid4.component.html',
  styleUrls: ['./gallery-grid4.component.css']
})
export class GalleryGrid4Component {

  banner: any = {
    pagetitle: "Gallery Grid 3 Icon",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "Gallery Grid 3 Icon",
  }

  galleries: any[] = [
    {
      gallery_image: "assets/images/portfolio/image_1.jpg",
      title: "School Library",
      category: "Library",
      gallery_link: "javascript:void(0);",
    },
  ]

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      handleMasonryFilter2();
      handleLightGallery();
    })(jQuery);
  }
}
