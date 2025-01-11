import { Component } from '@angular/core';
declare  var jQuery:  any;
declare  var dz_rev_slider_3:  any;

@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.css']
})
export class Slider3Component {

  ngOnInit(): void {
	  (function ($) {
        dz_rev_slider_3();
    })(jQuery);
  }
}
