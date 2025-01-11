import { Component } from '@angular/core';
declare  var jQuery:  any;
declare  var dz_rev_slider_7:  any;

@Component({
  selector: 'app-slider6',
  templateUrl: './slider6.component.html',
  styleUrls: ['./slider6.component.css']
})
export class Slider6Component {

  ngOnInit(): void {
	  (function ($) {
        dz_rev_slider_7();
    })(jQuery);
  }
}
