import { Component } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-testimonial3',
  templateUrl: './testimonial3.component.html',
  styleUrls: ['./testimonial3.component.css']
})
export class Testimonial3Component {
  ngOnInit(): void {
		(function ($) {
			jQuery('.testimonial-six').owlCarousel({
				loop:true,
				margin:0,
				center: true,
				autoplaySpeed: 3000,
				navSpeed: 3000,
				paginationSpeed: 3000,
				slideSpeed: 3000,
				smartSpeed: 3000,
				autoplay: 3000,
				nav:false,
				dots: true,
				navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
				responsive:{
					0:{
						items:1
					},
					
					480:{
						items:2
					},			
					
					991:{
						items:2
					},
					1000:{
						items:3
					}
				}
			});
		})(jQuery);
	}
}
