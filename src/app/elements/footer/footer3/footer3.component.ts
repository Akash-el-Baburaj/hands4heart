import { Component } from '@angular/core';
declare var jQuery: any;
declare var handleMasonryFilter2: any;
declare var handleLightGallery: any;
@Component({
  selector: 'app-footer3',
  templateUrl: './footer3.component.html',
  styleUrls: ['./footer3.component.css']
})
export class Footer3Component {
  ngOnInit(): void {
    (function ($) {
      handleMasonryFilter2();
      handleLightGallery();
    })(jQuery);
  }
}
