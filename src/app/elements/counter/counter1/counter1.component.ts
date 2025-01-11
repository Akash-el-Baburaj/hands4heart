import { Component } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component {
  ngOnInit(): void {
		(function ($) {
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});
			
		})(jQuery);
	}
}
