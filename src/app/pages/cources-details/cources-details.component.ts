import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnrolledUser } from './model';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { AlertService } from 'src/app/core/service/services/alert.service';
import { ToastService } from 'src/app/core/service/services/toast.service';
import { AccessmentService } from 'src/app/core/service/accessment.service';
import { PhonepeService } from 'src/app/core/service/phonePe/phonepe.service';

@Component({
  selector: 'app-cources-details',
  templateUrl: './cources-details.component.html',
  styleUrls: ['./cources-details.component.css'],
})
export class CourcesDetailsComponent implements OnInit {
  updateProfileForm!: FormGroup;
  @ViewChild('mediaDiv') mediaDiv!: ElementRef;

  // private inactivityTimeout: any;
  // private inactivityThreshold: number = 30000; // 30 seconds (adjust as needed)

  banner: any = {
    pagetitle: 'Program', //rename to course details
    bg_image: '',
    title: 'Program',
  };
  assessmentId: string = '';
  courseId: string = '';
  courseVideo: any;
  courseDetails: any;
  paymentStatus: string = 'unpaid';
  enrolled: any;
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
  user: any;
  enrolledList: EnrolledUser[] = [];
  page: number = 1;
  certificateReady: boolean = false;
  certificatePayment: string = 'unpaid';
  profileUpdated: boolean = false;
  videoId: any;
  quizCompleted: boolean = false;

  VideoType: string = '';
  qrData: any | null = null;
  certificateID: any | null = null;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private toastr: ToastService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private assessmentService: AccessmentService,
    private phonePe: PhonepeService
  ) {
    this.getSubscribedCourse();
    this.getCourseId();
    this.getUserProfile();
  }

  ngOnInit(): void {
    this.enrolled = localStorage.getItem('enrolled');
    const userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
    // this.resetInactivityTimer();

    // this.getSubscribedCourse();
    // const hasEmptyFields = this.checkForEmptyFields(this.user);
    // if (hasEmptyFields) {
    //   this.profileUpdated = true;
    // }

    this.updateProfileForm = this.fb.group({
      name: [this.user?.name || '', Validators.required],
      code: [this.user?.code, Validators.required],
      phone: [this.user?.phone || '', Validators.required],
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      age: [
        this.user?.age || '',
        [Validators.required, Validators.min(1), Validators.max(120)],
      ],
      blood_group: [this.user?.blood_group || '', Validators.required],
      education: [this.user?.education || '', Validators.required],
      pincode: [this.user?.pincode || '', Validators.required],
      thaluk: [this.user?.thaluk || '', Validators.required],
      district: [this.user?.district || '', Validators.required],
      state: [this.user?.state || '', Validators.required],
      country: [this.user?.country || '', Validators.required],
      address: [this.user?.address || '', Validators.required],
      gender: [this.user?.gender || '', Validators.required],
      date_of_birth: [this.user?.date_of_birth || '', Validators.required],
    });
  }

  // @HostListener('window:mousemove') // Detects mouse movement
  // @HostListener('window:scroll') // Detects scrolling
  // @HostListener('window:keydown') // Detects keyboard input
  // resetInactivityTimer() {
  //   clearTimeout(this.inactivityTimeout);
  //   this.inactivityTimeout = setTimeout(() => {
  //     this.showPopup();
  //   }, this.inactivityThreshold);
  // }

  // showPopup() {
  //   // Open modal popup if the user is idle
  //   this.modalService.open('watchVideosModal', { centered: true });
  // }

  getSubscribedCourse() {
    this.courseService.getMyCourseList(this.page).subscribe({
      next: (res) => {
        if (res.success) {
          this.enrolledList = res.data.enrolled;
          if (this.enrolledList && this.enrolledList.length > 0) {
            this.paymentStatus = res.data.enrolled[0].paymentStatus;
            this.enrolled = this.paymentStatus == 'paid' ? 'true' : 'false';
            this.certificateReady = res.data.enrolled[0].certificateReady;
            if (res.data.enrolled[0].certificate === null) {
              this.certificatePayment = 'unpaid';
            } else {
              this.certificatePayment =
                res.data.enrolled[0].certificate.paymentStatus;
            }
            this.profileUpdated = res.data.enrolled[0].userEnteredData;
            this.quizCompleted =
              res.data.enrolled[0].quizProgress?.score > 0 ? true : false;


            console.log(
              '::::::::::::this.quizCompleted:::::::',
              this.quizCompleted
            );
          } else {
            console.log('::::::::::::enrolled listt is empty::::::::::');
          }
        } else {
          console.log(
            ':::::::::::::failed fetching the subscribed course:::::::::::'
          );
        }
      },
      error: () => {
        console.log(
          ':::::::::::::something went wrong fetching subscribed course:::::::::::'
        );
      },
    });
  }

  loadNextPage(): void {
    this.page++;
  }

  loadPreviousPage(): void {
    if (this.page > 1) {
      this.page--;
    }
  }

  getCourseId() {
    let data: any;
    this.route.queryParams.subscribe((params: any) => {
      const DATA = params['data'];
      if (DATA) {
        data = JSON.parse(DATA);
        const course_Id = data?.CourseDetails?.id
          ? data?.CourseDetails?.id
          : data.id;
        this.courseId = course_Id;
        localStorage.setItem('courseId', this.courseId);
        this.getCourseDetailsByCourseId(course_Id);
        this.paymentStatus = data?.paymentStatus
          ? data.paymentStatus
          : 'unpaid';
        this.userProfile.user_name = data.user_name;
        this.userProfile.user_Phone = data.user_phone;
        this.userProfile.paymentStatus = data.paymentStatus;
        this.userProfile.createdBy = data.createdBy;
        this.courserDescription = data.CourseDetails?.description;
        this.courseObjective = data.CourseDetails?.course_objective;
        // this.getSubscribedCourse();
      } else {
        this.navigateToCoursetList();
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
          this.courseDetails = res.data;
          this.CourseDetailsData = this.forwardDataToDatails(
            this.courseDetails,
            this.courserDescription,
            this.courseObjective
          );
          this.patchValues(this.courseDetails);
        }
      },
    });
  }

  patchValues(data: any) {
    this.banner.bg_image = data.img;
    this.courseTitle = data.name;
  }

  forwardDataToDatails(
    detailsData: any[],
    descriptionData: string,
    objectiveData: string
  ) {
    const DATA = {
      details: detailsData,
      description: descriptionData,
      objective: objectiveData,
    };

    return DATA;
  }

  getCourseVideo(event: any, view?: boolean) {
    this.videoId = event.id;
    this.courseVideo = null;
    if (event) {
      setTimeout(() => {
        this.courseVideo = event.video_url;
      }, 30);
    }

    if (view) {
      setTimeout(() => {
        if (this.mediaDiv?.nativeElement) {
          const element = this.mediaDiv.nativeElement;
          const elementTop =
            element.getBoundingClientRect().top + window.scrollY;
          const offset = 75;
          const targetPosition = elementTop - offset;

          const finalPosition = Math.max(0, targetPosition);

          window.scrollTo({
            top: finalPosition,
            behavior: 'smooth',
          });
        }
      }, 0);
    }
  }

  getSafeUrl(videoUrl: string): SafeResourceUrl {
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
    // this.router.navigate(['/test-list'], { queryParams: { id: id } });
    this.getAssessmentList(id, this.page);
  }

  navigateToCoursetList() {
    this.router.navigate(['/courses']);
  }

  // getEnroll(id: string) {
  //   const formData = new FormData();
  //   formData.append('course_id', id);
  //   this.courseService.courseEnroll(formData).subscribe({
  //     next: (res: any) => {
  //       if (res.success) {
  //         this.enrolled = 'true';
  //         this.toastr.success('Your payment verification is pending!!', 'SUCCESS');
  //         this.getSubscribedCourse();
  //       } else {
  //         this.toastr.error('ERROR!', res.message);
  //       }
  //     },
  //   });
  // }

  getEnroll(id: string) {
    const formData = new FormData();
    formData.append('course_id', id);
    this.courseService.courseEnroll(formData).subscribe({
      next: (res: any) => {
        let paymentUrl = res?.data?.web;

        if (res.success) {
          this.enrolled = 'true';
          this.toastr.success(
            'Your payment verification is pending!!',
            'SUCCESS'
          );
          this.getSubscribedCourse();
        } else {
          this.enrolled = 'true';
          this.getSubscribedCourse();
          this.toastr.error('ERROR!', res.message);
        }

        // Redirect to payment page if URL is available
        if (paymentUrl) {
          window.location.href = paymentUrl;
        }
      },
      error: () => {
        this.toastr.error('Something went wrong during enrollment.', 'ERROR');
      },
    });
  }

  openCentered(content: any) {
    this.modalService.open(content, {
      centered: true,
      windowClass: 'custom-modal-2',
    });
  }

  getCertificate(content: any, CourseId: string) {
    const formData = new FormData();
    formData.append('courseId', CourseId);
    this.qrData = 'CERT-3-4-1737805743557';
    this.getCertificateId(1);
    this.openCentered(content);
  }

  open(content: any) {
    this.setUserDataToForm();
    this.modalService.open(content, {
      windowClass: 'custom-modal',
      centered: true,
    });
  }

  getCertificateId(page: number) {
    this.courseService.getMyCourseList(page).subscribe({
      next: (res: any) => {
        if (res.success) {
          const DATA = res.data;
          this.certificateID = DATA.enrolled[0].certificate.certificateId;
        }
      },
    });
  }

  updateProfile() {
    if (!this.updateProfileForm.valid) {
      this.toastr.warning('Please fill all the fields!!!', 'Warning');
      console.error('Form is invalid!', this.updateProfileForm.errors);
      this.updateProfileForm.markAllAsTouched(); // Mark all fields as touched
      return;
    }
    const formData = new FormData();

    formData.append('name', this.updateProfileForm.value.name);
    formData.append('phone', this.updateProfileForm.value.phone);
    formData.append('code', this.updateProfileForm.value.code);
    formData.append('email', this.updateProfileForm.value.email);
    formData.append('age', this.updateProfileForm.value.age);
    formData.append('blood_group', this.updateProfileForm.value.blood_group);
    formData.append('education', this.updateProfileForm.value.education);
    formData.append('pincode', this.updateProfileForm.value.pincode);
    formData.append('thaluk', this.updateProfileForm.value.thaluk);
    formData.append('district', this.updateProfileForm.value.district);
    formData.append('state', this.updateProfileForm.value.state);
    formData.append('country', this.updateProfileForm.value.country);
    formData.append('address', this.updateProfileForm.value.address);
    formData.append('gender', this.updateProfileForm.value.gender);
    formData.append(
      'date_of_birth',
      this.updateProfileForm.value.date_of_birth
    );
    this.courseService.updateProfile(formData).subscribe({
      next: (response) => {
        if (response.success) {
          this.toastr.success('Profile updated successfully!', 'Success');

          this.getSubscribedCourse();
          this.getUserProfile();
          this.resetForm();
          this.generateCertificate();
        } else {
          this.toastr.error(response.message, 'Failed');

          console.error('Failed to update profile:', response.message);
        }
      },
      error: (error) => {
        console.error('Error creating profile:', error);
      },
      complete: () => {
         
      },
    });
  }
  resetForm() {
    this.updateProfileForm.reset();
    this.modalService.dismissAll(); // Close the modal
  }

  onCertificateButtonClick(
    profileupdateModal: any,
    certificate: any,
    courseId: any
  ) {
    this.getSubscribedCourse();
    // const hasEmptyFields = this.checkForEmptyFields(this.user);

    // if (this.profileUpdated) {
    this.setUserDataToForm();
    this.open(profileupdateModal);
    // } else {
    //   console.log('user profile updated with all data');
    // this.openCentered(certificate);
    //}
  }

  checkForEmptyFields(user: any): boolean {
    return Object.values(user).some((value) => value == null || value == '');
  }

  setUserDataToForm() {
    this.updateProfileForm.patchValue({
      name: this.user.name,
      code: this.user.code,
      phone: this.user.phone,
      email: this.user.email,
      age: this.user.age,
      blood_group: this.user.blood_group,
      education: this.user.education,
      pincode: this.user.pincode,
      thaluk: this.user.thaluk,
      district: this.user.district || '',
      state: this.user.state,
      country: this.user.country,
      address: this.user.address,
      gender: this.user.gender,
      date_of_birth: this.user.date_of_birth,
    });
  }
  getUserProfile() {
    this.authService.getUserProfile().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.user = res.data;
          this.userProfile.user_name = this.user.name;
          this.userProfile.user_Phone = this.user.phone;
          this.userProfile.paymentStatus = this.paymentStatus;
          this.userProfile.createdBy = this.user.email;
        }
      },
    });
  }

  // generateCertificate() {
  //   const formData = new FormData();

  //   formData.append('courseId', this.courseId);

  //   this.courseService.generateCertificate(formData).subscribe({
  //     next: (response:any) => {
  //       if (response.success) {
  //        this.getSubscribedCourse();
  //       } else {
  //         console.error('Failed to genearte certicate:', response.message);
  //       }
  //     },
  //     error: (error:any) => {
  //       console.error('Error genearte certicate', error);
  //     },
  //     complete: () => {

  //     },
  //   });
  // }



  generateCertificate() {
    const formData = new FormData();
    formData.append('courseId', this.courseId);

    this.courseService.generateCertificate(formData).subscribe({
      next: (response: any) => {
        let paymentUrl = response?.data?.web;

        if (response.success) {
          // Redirect to the payment or certificate URL if available
  // Redirect to payment page if URL is available
        if (paymentUrl) {
          // window.location.href = paymentUrl;
        }
          this.getSubscribedCourse();
        } else {
          console.error('Failed to generate certificate:', response.message);
          this.toastr.error('Certificate generation failed.', 'ERROR');
        }

      
      },
      error: (error: any) => {
        console.error('Error generating certificate', error);
        this.toastr.error('An error occurred.', 'ERROR');
      },
    });
  }

  getAssessmentList(id: string, page: number) {
    this.assessmentService.getQUizList(id, page).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.assessmentId = res.data.quiz_list[0].id;
          this.startAssessment(this.assessmentId);
        }
      },
    });
  }
  startAssessment(id: string) {
    this.router.navigate(['/assessment'], { queryParams: { id: id } });
  }

  makePayment() {
    const transactionId = 'TXN' + new Date().getTime(); // Generate a unique Transaction ID
    this.phonePe.initiatePayment(500, '9876543210', transactionId);
  }
}
