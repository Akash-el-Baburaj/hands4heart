import { Component } from '@angular/core';

@Component({
  selector: 'app-home-college',
  templateUrl: './home-college.component.html',
  styleUrls: ['./home-college.component.css']
})
export class HomeCollegeComponent {

  services: any[] = [
    {
      service_image: "assets/images/our-work/pic1.jpg",
      title: "Special Education",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "services-1",
    },
    {
      service_image: "assets/images/our-work/pic2.jpg",
      title: "Full Day Session",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "services-1",
    },
    {
      service_image: "assets/images/our-work/pic3.jpg",
      title: "Qualified Teachers",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "services-1",
    },
    {
      service_image: "assets/images/our-work/pic3.jpg",
      title: "Qualified Teachers",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "services-1",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
