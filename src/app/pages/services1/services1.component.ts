import { Component } from '@angular/core';
interface type{
  service_image: string;
  title: string;
  description: string;
  button_text: string;
  button_link: string;
}
@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component {

  banner: any = {
    pagetitle: "Services 1",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Services 1",
  }

  services: type[] = [
    {
      service_image: "assets/images/our-work/pic1.jpg",
      title: "Special Education",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "javascript:void(0);",
    },
    {
      service_image: "assets/images/our-work/pic2.jpg",
      title: "Full Day Session",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "javascript:void(0);",
    },
    {
      service_image: "assets/images/our-work/pic3.jpg",
      title: "Qualified Teachers",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "javascript:void(0);",
    },
    {
      service_image: "assets/images/our-work/pic4.jpg",
      title: "Special Events",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "javascript:void(0);",
    },
    {
      service_image: "assets/images/our-work/pic5.jpg",
      title: "Pre Classes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "javascript:void(0);",
    },
    {
      service_image: "assets/images/our-work/pic6.jpg",
      title: "24/7 Supports",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button_text: "Learn More",
      button_link: "javascript:void(0);",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
