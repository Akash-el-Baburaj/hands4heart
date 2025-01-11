import { Component } from '@angular/core';
interface type{
  img:string;
  name: string;
  position: string;
  url: string;
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  banner: any = {
    pagetitle: "Teachers",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "Teachers",
  }

  teachers: any[] = [
    {
      teacher_image: "assets/images/our-team/pic1.jpg",
      teacher_name: "Nashid Martines",
      teacher_post: "Director",
      fb_link: "javascript:void(0);",
      twitter_link: "javascript:void(0);",
      linkedin_link: "javascript:void(0);",
      pinterest_link: "javascript:void(0);",
    },
  ]
  teachersData:type[] = [
    {
      img: 'assets/images/our-team/pic1.jpg',
      name: 'Nashid Martines',
      position: 'Director',
      url: '/teachers-profile'
    },
    {
      img: 'assets/images/our-team/pic2.jpg',
      name: 'Konne Backfield',
      position: 'Designer',
      url: '/teachers-profile'
    },
    {
      img: 'assets/images/our-team/pic3.jpg',
      name: 'Hackson Willingham',
      position: 'Developer',
      url: '/teachers-profile'
    },
    {
      img: 'assets/images/our-team/pic4.jpg',
      name: 'Konne Backfield',
      position: 'Manager',
      url: '/teachers-profile'
    },
    {
      img: 'assets/images/our-team/pic5.jpg',
      name: 'Nashid Martines',
      position: 'Director',
      url: '/teachers-profile'
    },
    {
      img: 'assets/images/our-team/pic6.jpg',
      name: 'Konne Backfield',
      position: 'Designer',
      url: '/teachers-profile'
    },
    {
      img: 'assets/images/our-team/pic7.jpg',
      name: 'Hackson Willingham',
      position: 'Developer',
      url: '/teachers-profile'
    },
    {
      img: 'assets/images/our-team/pic8.jpg',
      name: 'Konne Backfield',
      position: 'Manager',
      url: '/teachers-profile'
    }
  ]
}
