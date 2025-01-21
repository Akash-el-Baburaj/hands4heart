import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { CourseList, Course } from 'src/app/core/model/course.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {

  banner: any = {
    pagetitle: "All Courses",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "All Courses",
  };
  page: number = 1;
  courseLIst: Course[] = [];
  loading: boolean = false; // For loading state

  constructor(private courseService: CourseService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.loading = true; // Start loading
    this.courseService.getCourseList(this.page).subscribe({
      next: (res: CourseList) => {
        if (res.success) {
          this.courseLIst = res.data.courses;
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

  getEnroll(id: string) {
    const formData = new FormData()
    formData.append('course_id', id)
    this.courseService.courseEnroll(formData).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.toastr.success(res.message, 'SUCCESS')
        }
      }
    })
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
}
