import { Component, Input } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
declare  var handleLightGallery:  any;
@Component({
  selector: 'app-gallery5',
  templateUrl: './gallery5.component.html',
  styleUrls: ['./gallery5.component.css']
})
export class Gallery5Component {
  @Input()  data : any;
  
  constructor() { }
  
    ngOnInit(): void {
        (function ($) {
            handleMasonryFilter2();
            handleLightGallery();
        })(jQuery);
    }
}
