import { Component } from '@angular/core';

@Component({
  selector: 'app-home-school',
  templateUrl: './home-school.component.html',
  styleUrls: ['./home-school.component.css']
})
export class HomeSchoolComponent {

  skills: any = {
    title: "Discover our School",
    sub_title: "Igniting the spark of genius in every child.",
    content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><ul class='list-check circle primary text-black'><li>You Will Never Thought That Knowing Education</li><li>Never Mess With Education And Here's The Reasons Why</li><li>This Is Why This Year Will Be The Year Of Education</li></ul>",
    content_link: "about-1",
    exp_content: "<h2 class='no-title'>15+</h2><h4 class='title'>Years Experience Working</h4>",
    images_data: {
      "img1": "assets/images/about/about2/pic3.jpg",
      "img2": "assets/images/about/about2/pic4.jpg"
    },
  };

  constructor() { }

  ngOnInit(): void {
  }
  
}
