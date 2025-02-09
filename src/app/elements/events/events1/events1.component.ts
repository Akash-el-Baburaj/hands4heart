import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/service/event.service';
import { TimeFormatePipe } from 'src/app/core/pipes/time-formate.pipe';
import { Router } from '@angular/router';
declare  var jQuery:  any;
@Component({
  selector: 'app-events1',
  templateUrl: './events1.component.html',
  styleUrls: ['./events1.component.css']
})
export class Events1Component implements OnInit {

	eventList: any[] = [];
	page: number = 1;

  constructor (private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
	this.fetchEventList(this.page);
		(function ($) {
			jQuery('.blog-carousel').owlCarousel({
				loop:true,
				autoplaySpeed: 3000,
				navSpeed: 3000,
				paginationSpeed: 3000,
				slideSpeed: 3000,
				smartSpeed: 3000,
				autoplay: 3000,
				margin:30,
				nav:true,
				dots: false,
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

	fetchEventList(page: number) {
		this.eventService.getEventList(page).subscribe({
			next: (res: any) => {
				if (res.success) {
					this.eventList = res.data.event_list;
				}
			}
		})
	}

	navigateto(url: string, id: string, page: number){
		this.router.navigate([url], {queryParams: {data: this.dataStringfy(id,page)}})
	}

	dataStringfy(id: string, page: any) {
		let data = {}
		data = {
			id: id,
			page: page
		}

		return JSON.stringify(data)
	}

}
