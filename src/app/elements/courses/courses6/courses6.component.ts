import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-courses6',
  templateUrl: './courses6.component.html',
  styleUrls: ['./courses6.component.css']
})
export class Courses6Component implements OnChanges {

  @Input()  data: any;
  @Input() PaymentStatus: string = ''; 
  @Output() courseSelected = new EventEmitter<any>(); // Emits selected course to parent

  courseDetails: any[] = [];
  course: any;
  payment: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      const Data = this.data 
      this.course = this.data;     
      this.courseDetails = Data?.details?.details
    }
    if (changes['PaymentStatus']) {
      const payment = this.PaymentStatus 
      this.payment = payment;     
    }
  }

  getSafeUrl(videoUrl: string): SafeResourceUrl {
    // Ensure the video starts muted
    const urlWithParams = `${videoUrl}?autoplay=1&mute=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlWithParams);
  }

  getCourseVideo(course: any) {
    const data = course;
    this.courseSelected.emit(data)
  }



}
