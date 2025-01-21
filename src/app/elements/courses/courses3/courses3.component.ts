import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { CourseList, Course } from 'src/app/core/model/course.model';
declare  var jQuery:  any;


@Component({
  selector: 'app-courses3',
  templateUrl: './courses3.component.html',
  styleUrls: ['./courses3.component.css']
})
export class Courses3Component implements OnInit {

  page: number = 1;
  courseList: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.fetchCourseList(this.page);

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

  fetchCourseList(page: number) {
    this.courseService.getCourseList(page).subscribe({
      next: (res: CourseList) => {
        this.courseList =res.data.courses
        console.log('course list =>> ', this.courseList)
      }
    })
  }

  scrollLeft() {
    const scrollableRow = document.querySelector('.scrollable-row') as HTMLElement;
    scrollableRow.scrollBy({ left: -250, behavior: 'smooth' });
}

scrollRight() {
    const scrollableRow = document.querySelector('.scrollable-row') as HTMLElement;
    scrollableRow.scrollBy({ left: 250, behavior: 'smooth' });
}
}
