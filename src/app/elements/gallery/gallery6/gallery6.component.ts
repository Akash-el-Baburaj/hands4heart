import { Component, Input } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
declare  var handleLightGallery:  any;

@Component({
  selector: 'app-gallery6',
  templateUrl: './gallery6.component.html',
  styleUrls: ['./gallery6.component.css']
})
export class Gallery6Component {
  @Input()  data : any;
  
  constructor() { }
  
    ngOnInit(): void {
        (function ($) {
            handleMasonryFilter2();
            handleLightGallery();
        })(jQuery);
    }
}

