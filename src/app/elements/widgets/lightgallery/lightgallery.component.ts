import { Component } from '@angular/core';
declare var jQuery: any;
declare var handleMasonryFilter2: any;
declare var handleLightGallery: any;
@Component({
  selector: 'app-lightgallery',
  templateUrl: './lightgallery.component.html',
  styleUrls: ['./lightgallery.component.css']
})
export class LightgalleryComponent {
  ngOnInit(): void {
    (function ($) {
      handleMasonryFilter2();
      handleLightGallery();
    })(jQuery);
  }
}
