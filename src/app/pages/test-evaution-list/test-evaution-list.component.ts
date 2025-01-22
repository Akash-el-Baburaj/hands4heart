import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessmentService } from 'src/app/core/service/accessment.service';

@Component({
  selector: 'app-test-evaution-list',
  templateUrl: './test-evaution-list.component.html',
  styleUrls: ['./test-evaution-list.component.css']
})
export class TestEvautionListComponent implements OnInit {

  assessmentList: any[] = [];

  banner : any = {
		pagetitle: "Assessment List",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Assessment List",
	}

  loading: boolean = false;
  page: number = 1;

  constructor(private assessmentService: AccessmentService, private route: ActivatedRoute, private router: Router) {
    this.getCourseId()
  }

  ngOnInit(): void {
  }

  getCourseId() {
    let id: any;
    this.route.queryParams.subscribe(params => {
      const ID = params['id']; 
      if (ID) {
        id = JSON.parse(ID);
        this.getAssessmentList(id, this.page)
      }
    })
  }

  getAssessmentList(id: string, page: number) {
    this.loading = true;
    this.assessmentService.getQUizList(id, page).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.assessmentList = res.data.quiz_list;
          this.loading = false;
        }
      }
    })
  }

  startAssessment(id: string) {
    this.router.navigate(['/assessment'], {queryParams: {id: id}})
  }

}
