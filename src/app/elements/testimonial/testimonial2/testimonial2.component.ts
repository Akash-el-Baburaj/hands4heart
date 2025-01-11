import { Component } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-testimonial2',
  templateUrl: './testimonial2.component.html',
  styleUrls: ['./testimonial2.component.css']
})
export class Testimonial2Component {
  ngOnInit(): void {
		(function ($) {
			jQuery('.client-carousel').owlCarousel({
				loop:true,
				margin:30,
				nav:false,
				autoplaySpeed: 3000,
				navSpeed: 3000,
				paginationSpeed: 3000,
				slideSpeed: 3000,
				smartSpeed: 3000,
				autoplay: 3000,
				navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
				dots: true,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:1
					},			
					991:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		})(jQuery);
	}
}
