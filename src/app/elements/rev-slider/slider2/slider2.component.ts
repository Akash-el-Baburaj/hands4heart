import { Component } from '@angular/core';
declare  var jQuery:  any;
declare  var dz_rev_slider_2:  any;

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component {
  ngOnInit(): void {
	  (function ($) {
        dz_rev_slider_2();
    })(jQuery);
  }
}
