import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { Router } from '@angular/router';
import { CourseList, Course } from 'src/app/core/model/course.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {


    banner: any = {
      pagetitle: "My Courses",
      bg_image: "assets/images/banner/bnr1.jpg",
      title: "My Courses",
    };
    page: number = 1;
    courseLIst: any[] = [];
    loading: boolean = false; // For loading state
  
    constructor(private courseService: CourseService, private toastr: ToastrService, private router: Router) {}
  
    ngOnInit(): void {
      this.getCourses();
    }
  
    getCourses(): void {
      this.loading = true; // Start loading
      this.courseService.getMyCourseList(this.page).subscribe({
        next: (res: any) => {
          if (res.success) {
            this.courseLIst = res.data.enrolled;
          } else {
            this.courseLIst = [];
          }
          this.loading = false; // Stop loading
        },
        error: () => {
          this.courseLIst = [];
          this.loading = false; // Stop loading on error
        }
      });
    }
  
    loadNextPage(): void {
      this.page++;
      this.getCourses();
    }
  
    loadPreviousPage(): void {
      if (this.page > 1) {
        this.page--;
        this.getCourses();
      }
    }

    showNoCoursesToast() {
      console.log('here')
      this.toastr.info(
        'No courses available. Click here to browse all courses.',
        'No Data');
        this.router.navigate(['/courses'])
    }

    navigateToCourseDetails(data: any) {
      this.router.navigate(['/courses-details/'],{queryParams: {data: JSON.stringify(data)}})
    }

}
