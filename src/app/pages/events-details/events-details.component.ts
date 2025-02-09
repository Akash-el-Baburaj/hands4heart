import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/service/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  banner : any = {
		pagetitle: "Event Details",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Event Details",
	}
  eventDetails: any = {};
  eventList: any[] = [];
  page: number = 1;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getEventId()
  }
  
  ngOnInit () : void {

  }

  getEventId() {
    let data: any;
    let Page: any;
    this.route.queryParams.subscribe((params: any) => {
      const Data = params['data'];
      data = JSON.parse(Data)!
      // const page = params['page'];
      // Page = JSON.parse(page) 
        console.log('data <<<<<<<< ',data)
      if (data) {
        this.page = Page;
        this.fetchEventList(data.page, data.id);
      }
    });
  }

  fetchEventList(page: number, id: string) {
		this.eventService.getEventList(page).subscribe({
			next: (res: any) => {
				if (res.success) {
          const DATA = res.data.event_list
					this.eventDetails = DATA.find((item: any) => item.id === id);
          this.eventList = DATA
				}
			}
		})
	}

  getEventDetails(id: string) {
    this.eventService.getEventDetails().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.eventDetails = {}
        }
      }
    })
  }



}
