import { Component } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
@Component({
  selector: 'app-courses2',
  templateUrl: './courses2.component.html',
  styleUrls: ['./courses2.component.css']
})
export class Courses2Component {
  ngOnInit(): void {
    (function ($) {
        handleMasonryFilter2();
        // handleLightGallery();
    })(jQuery);
  
}
}
