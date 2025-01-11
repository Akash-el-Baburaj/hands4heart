import { Component } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-testimonial1',
  templateUrl: './testimonial1.component.html',
  styleUrls: ['./testimonial1.component.css']
})
export class Testimonial1Component {
  ngOnInit(): void {
	  (function ($) {
        jQuery('.testimonial-two-dots').owlCarousel({
			loop:true,
			autoplaySpeed: 3000,
			navSpeed: 3000,
			paginationSpeed: 3000,
			slideSpeed: 3000,
			smartSpeed: 3000,
			autoplay: 3000,
			margin:30,
			nav:true,
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
					items:2
				}
			}
		});
    })(jQuery);
  }
}
