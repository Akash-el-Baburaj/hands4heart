import { Component } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
@Component({
  selector: 'app-courses5',
  templateUrl: './courses5.component.html',
  styleUrls: ['./courses5.component.css']
})
export class Courses5Component {
  ngOnInit(): void {
    (function ($) {
        handleMasonryFilter2();
        // handleLightGallery();
    })(jQuery);
  
}
}
