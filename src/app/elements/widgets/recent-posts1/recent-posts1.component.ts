import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recent-posts1',
  templateUrl: './recent-posts1.component.html',
  styleUrls: ['./recent-posts1.component.css']
})
export class RecentPosts1Component implements OnInit {

    @Input()  data: any;
    @Output() courseSelected = new EventEmitter<any>(); // Emits selected course to parent
    courseDetails: any[] = [];
  
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['data']) {
          this.courseDetails = this.data.details.details
          console.log(this.data, '<<1>>>')
        }
      }

    ngOnInit(): void {
      // throw new Error('Method not implemented.');
    }

    getCourseVideo(videoUrl: string) {
      const data = videoUrl;
      this.courseSelected.emit(data)
    }
}
