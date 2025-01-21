import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cources-details',
  templateUrl: './cources-details.component.html',
  styleUrls: ['./cources-details.component.css']
})
export class CourcesDetailsComponent implements OnInit {

  banner : any = {
		pagetitle: "Courses Details",
		bg_image: "",
		title: "Courses Details",
	}

  courseDetails: any;
  courseTitle: string = '';
  userProfile: {
    user_name: string;
    user_Phone: string;
    paymentStatus: string;
    createdBy: string;
  } = {
    user_name: '',
    user_Phone: '',
    paymentStatus: '',
    createdBy: '',
  };
  courserDescription: string = '';
  courseObjective: string = '';
  CourseDetailsData: any;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
    this.getCourseId();
  }

  ngOnInit(): void {
    
  }

  getCourseId() {
    let data: any;
    this.route.queryParams.subscribe(params => {
      const DATA = params['data']; 
      if (DATA) {
        data = JSON.parse(DATA)
        const course_Id = data.CourseDetails.id;
        this.getCourseDetailsByCourseId(course_Id);
        this.userProfile.user_name = data.user_name;
        this.userProfile.user_Phone = data.user_phone;
        this.userProfile.paymentStatus = data.paymentStatus;
        this.userProfile.createdBy = data.createdBy;
        this.courserDescription =data.CourseDetails.description
        this.courseObjective =data.CourseDetails.course_objective
      }
    });
  }


  getCourseDetailsByCourseId(id: any) {
    this.courseService.courseDetails(id).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.courseDetails = res.data
          this.CourseDetailsData = this.forwardDataToDatails(this.courseDetails, this.courserDescription, this.courseObjective)
          this.patchValues(this.courseDetails)
        }
      }
    })
  }

  patchValues(data: any) {
    this.banner.bg_image = data.img;
    this.courseTitle = data.name;
  }

  forwardDataToDatails(detailsData: any[], descriptionData: string, objectiveData: string) {
    const DATA = {
      details: detailsData,
      description: descriptionData,
      objective: objectiveData
    }

    return DATA
  }
}
