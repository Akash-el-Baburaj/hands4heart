import { Component } from '@angular/core';
interface type{
  img: string;
  title: string;
  loction: string;
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  banner: any = {
    pagetitle: "Event 1",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "Event 1",
  }
  events: any[] = [
    {
      event_image: "assets/events/grid/pic1.jpg",
      event_date: "<strong>10 June</strong> <span> 2024</span>",
      event_time: "05:00 PM",
      event_locaiton: "Marmora Road",
      event_title: "Why is Early Education Essential?",
      event_link: "event-details",
    },
  ]
  constructor() { }

  eventData:type[] = [
    {
      img: 'assets/images/events/grid/pic1.jpg',
      title: 'Why is Early Education Essential?',
      loction: ' Marmora Road'
    },
    {
      img: 'assets/images/events/grid/pic2.jpg',
      title: 'The Shocking Revelation of Education.',
      loction: ' Marmora Road'
    },
    {
      img: 'assets/images/events/grid/pic3.jpg',
      title: 'Five Things Nobody Told You About',
      loction: ' Marmora Road'
    },
    {
      img: 'assets/images/events/grid/pic4.jpg',
      title: 'Here\'s What People Are Saying About',
      loction: ' Marmora Road'
    },
    {
      img: 'assets/images/events/grid/pic1.jpg',
      title: 'How Education Can Ease Your Pain',
      loction: ' Marmora Road'
    },
    {
      img: 'assets/images/events/grid/pic2.jpg',
      title: 'Five Things Nobody Told You About',
      loction: ' Marmora Road'
    }
  ]
}
