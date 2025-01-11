import { Component } from '@angular/core';
declare var EduZone: any;

@Component({
  selector: 'app-about-us2',
  templateUrl: './about-us2.component.html',
  styleUrls: ['./about-us2.component.css']
})
export class AboutUs2Component {

  banner: any = {
    pagetitle: "About us 2",
    bg_image: "assets/images/banner/bnr3.jpg",
    title: "About us 2",
  }

  skills: any = {
    title: "Learn New Skills",
    sub_title: "Igniting the spark of genius in every child.",
    content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><ul class='list-check circle primary text-black'><li>You Will Never Thought That Knowing Education</li><li>Never Mess With Education And Here's The Reasons Why</li><li>This Is Why This Year Will Be The Year Of Education</li></ul>",
    content_link: "javascript:void(0)",
    exp_content: "<h2 class='no-title'>15+</h2><h4 class='title'>Years Experience Working</h4>",
    images_data: {
      "img1": "assets/images/about/about2/pic1.jpg",
      "img2": "assets/images/about/about2/pic2.jpg"
    },
  };

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
  ];
  constructor() { }

  ngOnInit(): void {
    EduZone.init();
  }

}
