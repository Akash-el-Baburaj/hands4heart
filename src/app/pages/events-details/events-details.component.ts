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

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit () : void {

  }

  getEventId() {
    let id: any;
    this.route.queryParams.subscribe((params: any) => {
      const ID = params['id'];
      if (ID) {
        id = ID;
        this.getEventDetails(id);
      }
    });
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
