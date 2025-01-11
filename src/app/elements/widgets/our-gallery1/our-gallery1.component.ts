import { Component } from '@angular/core';
declare var jQuery: any;
declare var handleMasonryFilter2: any;
declare var handleLightGallery: any;
@Component({
  selector: 'app-our-gallery1',
  templateUrl: './our-gallery1.component.html',
  styleUrls: ['./our-gallery1.component.css']
})
export class OurGallery1Component {
  ngOnInit(): void {
    (function ($) {
      handleMasonryFilter2();
      handleLightGallery();
    })(jQuery);
  }
}
