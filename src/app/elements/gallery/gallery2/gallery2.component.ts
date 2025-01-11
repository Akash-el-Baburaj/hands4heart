import { Component } from '@angular/core';
declare var jQuery: any;
declare var handleMasonryFilter2: any;
declare var handleLightGallery: any;
@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css']
})
export class Gallery2Component {
  constructor() { }
  ngOnInit(): void {
    (function ($) {
      handleMasonryFilter2();
      handleLightGallery();
    })(jQuery);
  }
}
