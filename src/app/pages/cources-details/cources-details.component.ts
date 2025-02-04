import { Component, OnInit, TemplateRef } from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cources-details',
  templateUrl: './cources-details.component.html',
  styleUrls: ['./cources-details.component.css']
})
export class CourcesDetailsComponent implements OnInit {

  updateProfileForm!: FormGroup;

  banner : any = {
		pagetitle: "Program", //rename to course details
		bg_image: "",
		title: "Program",
	}

  courseId: string = '';
  courseVideo: any;
  courseDetails: any;
  paymentStatus: string = 'unpaid';
  enrolled: any ;
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
  VideoType: string = '';
  qrData: any | null = null;

  constructor(
    private courseService: CourseService, 
    private route: ActivatedRoute, 
    private sanitizer: DomSanitizer, 
    private router: Router, 
    private toastr: ToastrService,
    private modalService: NgbModal,
    private fb: FormBuilder,

  ) {
    this.getCourseId();
  }

  ngOnInit(): void {

    this.enrolled=localStorage.getItem('enrolled')

    this.updateProfileForm = this.fb.group({
      name: ['', Validators.required],
      countryCode: ['+91', Validators.required], // Default to +91
      phone: ['', Validators.required],  // 10-digit phone number validation
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      blood_group: ['', Validators.required],
      education: ['', Validators.required],
      pincode: ['', Validators.required], // 6-digit pincode
      thaluk: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
    });
    
  }

  getCourseId() {
    let data: any;
    this.route.queryParams.subscribe((params: any) => {
      const DATA = params['data']; 
      if (DATA) {
        data = JSON.parse(DATA)
        console.log('details data =>> ', data)
        const course_Id = data?.CourseDetails?.id ? data?.CourseDetails?.id : data.id;
        console.log('course_Id => ', course_Id)
        this.courseId = course_Id;
        this.getCourseDetailsByCourseId(course_Id);
        this.paymentStatus = data.paymentStatus
        this.userProfile.user_name = data.user_name;
        this.userProfile.user_Phone = data.user_phone;
        this.userProfile.paymentStatus = data.paymentStatus;
        this.userProfile.createdBy = data.createdBy;
        this.courserDescription =data.CourseDetails?.description
        this.courseObjective =data.CourseDetails?.course_objective
      } else {
        this.navigateToCoursetList()
      }
    });
  }
  showSuccess() {
    this.toastr.success('Operation Successful!', 'Success');
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

  getCourseVideo(event: any) {
    this.courseVideo = null
    if (event) {
      setTimeout(() => {
        this.courseVideo = event
      }, 30);
      
    }
  }

  // getSafeUrl(videoUrl: string): SafeResourceUrl {
  //   // Sanitize the video URL to make it safe for Angular
  //   console.log('video url => ', videoUrl)
  //   const videoId = this.getYouTubeVideoId(videoUrl);
  //   const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  //   return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  // }

  // private getYouTubeVideoId(url: string): string | null {
  //   const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([\w-]{11})/);
  //   return match ? match[1] : null; // Return the video ID or null if not found
  // }

  getSafeUrl(videoUrl: string): SafeResourceUrl {
    console.log('Video URL => ', videoUrl);

    if (this.isYouTubeUrl(videoUrl)) {
      const videoId = this.getYouTubeVideoId(videoUrl);
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      this.VideoType = 'youtube';
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else if (this.isVimeoUrl(videoUrl)) {
      const videoId = this.getVimeoVideoId(videoUrl);
      const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
      this.VideoType = 'vimeo';
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else if (this.isServerHostedUrl(videoUrl)) {
      this.VideoType = 'server';
      return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    } else {
      throw new Error('Unsupported video URL');
    }
  }

  private isYouTubeUrl(url: string): boolean {
    return /(?:youtube\.com|youtu\.be)/.test(url);
  }

  private getYouTubeVideoId(url: string): string {
    const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&?]+)/);
    return match ? match[1] : '';
  }

  private isVimeoUrl(url: string): boolean {
    return /vimeo\.com/.test(url);
  }

  private getVimeoVideoId(url: string): string {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : '';
  }

  private isServerHostedUrl(url: string): boolean {
    return /\.(mp4|webm|ogg)$/.test(url);
  }

  navigateToTestList(id: string) {
    this.router.navigate(['/test-list'], {queryParams: {id: id}})
  }

  navigateToCoursetList() {
    this.router.navigate(['/courses'])
  }


  getEnroll(id: string) {
    const formData = new FormData()
    formData.append('course_id', id)
    this.courseService.courseEnroll(formData).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.enrolled='true';
          this.toastr.success(res.message, 'SUCCESS')
        }
      }
    })
  }

  openCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  getCertificate(content: any, CourseId: string) {
    const formData = new FormData();
    formData.append('courseId', CourseId);
    this.qrData = 'CERT-3-4-1737805743557';
    this.openCentered(content)
    // this.courseService.getCertificate(formData).subscribe({
    //   next: (res: any) => {
    //     console.log('res certificate => ', res)
    //     this.qrData = res.data.certificateId;
    //     this.openCentered(content)

    //   }
    // })
  }

  // open(content: TemplateRef<NgbModal>): void {
  //   this.modalService.open(content, { scrollable: true });
  // }

  open(content: any) {

    this.modalService.open(content, {windowClass: 'custom-modal', centered: true });
  }
  

  updateProfile() {
    if (this.updateProfileForm.valid) {
      const formData = new FormData();

      formData.append("name", this.updateProfileForm.value.name);
      formData.append("phone", this.updateProfileForm.value.phone);
      formData.append("countryCode", this.updateProfileForm.value.countryCode);
      formData.append("email", this.updateProfileForm.value.email);
      formData.append("age", this.updateProfileForm.value.age);
      formData.append("blood_group", this.updateProfileForm.value.blood_group);
      formData.append("education", this.updateProfileForm.value.education);
      formData.append("pincode", this.updateProfileForm.value.pincode);
      formData.append("thaluk", this.updateProfileForm.value.thaluk);
      formData.append("district", this.updateProfileForm.value.district);
      formData.append("state", this.updateProfileForm.value.state);
      formData.append("country", this.updateProfileForm.value.country);
      formData.append("address", this.updateProfileForm.value.address);
      formData.append("gender", this.updateProfileForm.value.gender);
      formData.append("date_of_birth", this.updateProfileForm.value.date_of_birth);
      

        this.courseService.updateProfile(formData).subscribe({
          next: (response) => {
            console.log("response of profile update- ", response);
            if (response.success) {
            
            this.resetForm();
             
            } else {
              console.error("Failed to update profile:", response.message);
            }
          },
          error: (error) => {
            console.error("Error creating profile:", error);
          },
          complete: () => {
         
            console.log("Profile updated successfully!...");
          },
        });

    }
  }
  resetForm() {
    this.updateProfileForm.reset();
   
  }
  // getEmbedUrl(videoUrl: string): SafeResourceUrl {
  //   const videoId = this.getYouTubeVideoId(videoUrl);
  //   const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  // }

  // private getYouTubeVideoId(url: string): string {
  //   const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  //   return match ? match[1] : ""; // return video ID or empty string
  // }

}
