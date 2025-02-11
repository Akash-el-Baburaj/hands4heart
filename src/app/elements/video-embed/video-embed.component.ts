import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseService } from 'src/app/core/service/course.service';
import { EnrolledUser, SubCourse } from 'src/app/pages/cources-details/model';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css']
})
export class VideoEmbedComponent implements OnChanges, OnInit {

  @Input() VideoURL: SafeResourceUrl | null = '';
  @Input() VideoType: string = '';
  @Input() videoId: any ;
  @Output() VideoCompleted = new EventEmitter<any>(); 

  videoEmbedUrl: SafeResourceUrl | null = '';
  videoEmbedType: string | null = '';
  duration: number | null = null;
  isLoading: boolean = true;
  isVideoWatched: boolean = false;
  enrolled_id:any;
  video_id:any;
  subCourseList: SubCourse[] = [];
  


  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['VideoURL']) {
      this.videoEmbedUrl = this.VideoURL;
      this.videoEmbedType = this.VideoType
      this.video_id = this.videoId

     
    }
  }

  ngOnInit(): void {
    this.enrolled_id=localStorage.getItem('enrolled_id')
    this.videoEmbedUrl = this.VideoURL;
    this.videoEmbedType = this.VideoType;
    // this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    
  }
  constructor(
      private courseService: CourseService,
      
      
    ) {

    }

  onMetadataLoaded(video: HTMLVideoElement): void {
    this.duration = video.duration; // Get video duration in seconds
    console.log('Video duration (seconds):', this.duration);
  
    const hours = Math.floor(this.duration / 3600); // Calculate hours
    const minutes = Math.floor((this.duration % 3600) / 60); // Calculate remaining minutes
    const seconds = Math.floor(this.duration % 60); // Calculate remaining seconds
  
    console.log(
      `Video duration: ${hours} hour(s), ${minutes} minute(s), and ${seconds} second(s)`
    );
  }
  
  onVideoEnded(video: HTMLVideoElement): void {
    video.autoplay = false; // Stop autoplay after the first play
    console.log('Video ended. Autoplay disabled.');

  }

  onVideoCanPlay(): void {
    console.log('Video is ready to play');
    this.isLoading = false; // Hide the loader when the video is ready
  }

  onTimeUpdate(video: HTMLVideoElement): void {
    const threshold = 0.9; // 90% watched threshold
    const watchedPercentage = video.currentTime / video.duration;

    if (watchedPercentage >= threshold && !this.isVideoWatched) {
      this.isVideoWatched = true;
      console.log('Video is completely watched');
      this.getSubscribedCourse()
   
    }
  }

  updateVideoMarked(): void {
    const formData = new FormData();

    formData.append('enrollId', this.enrolled_id);
    formData.append('subCourseId', this.video_id);
    
    this.courseService.markVideo(formData).subscribe({
      next: (response) => {
        console.log('response of mark video as completed- ', response);
        if (response.success) {
          console.log('video marked as completed')
     
        } else {
          console.error('Failed to mark video as completed:', response.message);
        }
      },
      error: (error) => {
        console.error('Error mark video as completed:', error);
      },
      complete: () => {
        console.log('mark video  completed successfully!...');
      },
    });
  }

  getSubscribedCourse() {
    this.courseService.getMyCourseList(1).subscribe({
      next: (res) => {
        if (res.success) {
          this.subCourseList = res.data.enrolled[0].subCourses;
  
          // Check if the current video is completed
          const currentVideo = this.subCourseList.find(course => course.id === this.video_id);
  
          if (currentVideo) {
            if (currentVideo.completed) {
              console.log('Video already marked as completed, no need to update.');
            } else {
              console.log('Video not marked as completed, updating now.');
              this.updateVideoMarked();
            }
          } else {
            console.log('Current video not found in the subscribed list.');
          }
  
        } else {
          console.log(':::::::::::::failed fetching the subscribed course:::::::::::');
        }
      },
      error: () => {
        console.log(':::::::::::::something went wrong fetching subscribed course:::::::::::');
      }
    });
  }
  

}
