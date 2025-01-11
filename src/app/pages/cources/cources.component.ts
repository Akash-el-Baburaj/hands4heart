import { Component } from '@angular/core';
interface type{
  img: string;
  title: string;
  desc: string;
  use_student: string;
  price: number;
}
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent {

  banner: any = {
    pagetitle: "Courses",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "Courses",
  }
  courses: any[] = [
    {
      course_image: "assets/images/our-services/pic1.jpg",
      teacher_image: "assets/images/testimonials/pic1.jpg",
      teacher_name: "Jack Ronan",
      reviews: "10 Review",
      subject: "Learn Python – Interactive Python Tutorial",
      course_link: "courses-details",
      course_description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      students: "20 Student",
      price: "$79.00",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  courceData:type[] = [
    {
      img: 'assets/images/our-services/pic1.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    },
    {
      img: 'assets/images/our-services/pic2.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    },
    {
      img: 'assets/images/our-services/pic3.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    },
    {
      img: 'assets/images/our-services/pic4.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    },
    {
      img: 'assets/images/our-services/pic1.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    },
    {
      img: 'assets/images/our-services/pic2.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    },
    {
      img: 'assets/images/our-services/pic3.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    },
    {
      img: 'assets/images/our-services/pic4.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    },
    {
      img: 'assets/images/our-services/pic1.jpg',
      title: 'Learn Python – Interactive Python Tutorial',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      use_student: '20 Student ',
      price: 79
    }
  ]
}
