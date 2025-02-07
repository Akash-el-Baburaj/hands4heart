// import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { Router } from '@angular/router';
// import { UsersService } from 'src/app/core/service/users.service';
// import { Banners, Banner } from 'src/app/core/model/banners.model';

// declare  var jQuery:  any;
// declare  var dz_rev_slider_4:  any;

// @Component({
//   selector: 'app-slider4',
//   templateUrl: './slider4.component.html',
//   styleUrls: ['./slider4.component.css']
// })
// export class Slider4Component implements OnInit, AfterViewInit {

//   videoUrl: string = ''; // Raw video URL (from YouTube or Vimeo)
//   videoType: 'youtube' | 'vimeo' | 'local' = 'youtube'; // Type of video (YouTube, Vimeo)
//   sanitizedYouTubeUrl: SafeResourceUrl | null = null;
//   sanitizedVimeoUrl: SafeResourceUrl | null = null;
//   page: number = 1;
//   banners: Banner[] = [];
//   safeBanners: { [key: string]: SafeResourceUrl } = {};
//   VideoType: string | null = null;


//   constructor(private sanitizer: DomSanitizer, private router: Router, private userService: UsersService) { }
//   ngOnInit(): void {
//      this.videoUrl = 'https://www.youtube.com/watch?v=DUaxt8OlT3o'; // Change this dynamically
//      this.getBanner();
//     // this.processVideoUrl();
// 	  // (function ($) {
//     //     dz_rev_slider_4();
//     // })(jQuery);
//     jQuery(document).ready(function () {
//       jQuery("#slider").on("revolution.slide.onloaded", function () {
//           const videoElement:any = document.querySelector('video[src="assets/video/cpr.mp4"]');
//           if (videoElement) {
//               videoElement.muted = true; // Ensure muting is enforced after library initialization
//           }
//       });
//   });
  
    
//   }

//   ngAfterViewInit(): void {
//     // Ensure that jQuery is executed after Angular renders the view
//     setTimeout(() => {
//       (function ($) {
//         dz_rev_slider_4();
//       })(jQuery);
//     });
//   }


//   getBanner() {
//     this.userService.getBanners(this.page).subscribe({
//       next: (res: Banners) => {
//         if (res.success) {
//           this.banners = res.data.banner;
//           this.banners.forEach(banner => {
//             // Sanitize URLs based on banner type
//             this.safeBanners[banner.id] = this.sanitizer.bypassSecurityTrustResourceUrl(`${banner.videoUrl}ddsds?autoplay=1&mute=1`);
//           });
//         }
//       },
//       error: (err: any) => {
//         console.error('Error fetching banners:', err);
//       }
//     });
//   }


//   processVideoUrl(data: any): void {
//     if (data.includes('youtube.com') || data.includes('youtu.be')) {
//       this.videoType = 'youtube';
//       this.sanitizedYouTubeUrl = this.getYouTubeEmbedUrl(data);
//     } else if (data.includes('vimeo.com')) {
//       this.videoType = 'vimeo';
//       this.sanitizedVimeoUrl = this.getVimeoEmbedUrl(data);
//     }
//   }

//   getYouTubeEmbedUrl(url: string): SafeResourceUrl {
//     // const videoId = this.extractYouTubeVideoId(url);
//     // const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }

//   extractYouTubeVideoId(url: string): string {
//     const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&?/\s]+)/;
//     const match = url.match(regExp);
//     return match ? match[1] : '';
//   }

//   getVimeoEmbedUrl(url: string): SafeResourceUrl {
//     const videoId = this.extractVimeoVideoId(url);
//     const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1`;
//     return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
//   }

//   extractVimeoVideoId(url: string): string {
//     const regExp = /vimeo\.com\/(\d+)/;
//     const match = url.match(regExp);
//     return match ? match[1] : '';
//   }

//   navigateTo(url: string): void {
//     // Check if the URL contains a hash (e.g., #register)
//     if (url.includes('#')) {
//       const [path, hash] = url.split('#');
//       this.router.navigate([path]); // Navigate to the path (e.g., '/home-coaching')
//       setTimeout(() => {
//         const element = document.getElementById(hash);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 0); // Delay to ensure the router navigates first
//     } else {
//       // Normal navigation for full routes
//       this.router.navigate([url]);
//     }
//   }

//   getSafeUrl(videoUrl: string): SafeResourceUrl {
//     // console.log('CourseDetailsData',CourseDetailsData)
//     if (this.isYouTubeUrl(videoUrl)) {
//       const videoId = this.getYouTubeVideoId(videoUrl);
//       const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//       this.VideoType = 'youtube';
//       return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
//     } else if (this.isVimeoUrl(videoUrl)) {
//       const videoId = this.getVimeoVideoId(videoUrl);
//       const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
//       this.VideoType = 'vimeo';
//       return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
//     } else if (this.isServerHostedUrl(videoUrl)) {
//       this.VideoType = 'server';
//       return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
//     } else {
//       throw new Error('Unsupported video URL');
//     }
//   }

//   private isYouTubeUrl(url: string): boolean {
//     return /(?:youtube\.com|youtu\.be)/.test(url);
//   }

//   private getYouTubeVideoId(url: string): string {
//     const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&?]+)/);
//     return match ? match[1] : '';
//   }

//   private isVimeoUrl(url: string): boolean {
//     return /vimeo\.com/.test(url);
//   }

//   private getVimeoVideoId(url: string): string {
//     const match = url.match(/vimeo\.com\/(\d+)/);
//     return match ? match[1] : '';
//   }

//   private isServerHostedUrl(url: string): boolean {
//     return /\.(mp4|webm|ogg)$/.test(url);
//   }

// }

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/service/users.service';
import { Banners, Banner } from 'src/app/core/model/banners.model';

declare var jQuery: any;
declare var dz_rev_slider_4: any;

@Component({
  selector: 'app-slider4',
  templateUrl: './slider4.component.html',
  styleUrls: ['./slider4.component.css']
})
export class Slider4Component implements OnInit, AfterViewInit {
  page: number = 1;
  banners: Banner[] = [];
  safeUrls: { [key: string]: SafeResourceUrl | string } = {};

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getBanner();
  }

  ngAfterViewInit(): void {
    // Initialization moved to after data load
  }

  getBanner() {
    this.userService.getBanners(this.page).subscribe({
      next: (res: Banners) => {
        if (res.success) {
          this.banners = res.data.banner;
          this.processBanners();
          this.initializeSlider();
        }
      },
      error: (err: any) => {
        console.error('Error fetching banners:', err);
      }
    });
  }

  private processBanners() {
    this.banners.forEach(banner => {
      if (banner.bannerType === 'VIDEO') {
        if (this.isYouTubeUrl(banner.videoUrl)) {
          this.safeUrls[banner.id] = this.getYouTubeEmbedUrl(banner.videoUrl);
        } else if (this.isVimeoUrl(banner.videoUrl)) {
          this.safeUrls[banner.id] = this.getVimeoEmbedUrl(banner.videoUrl);
        } else {
          // Direct video URL for server-hosted files
          this.safeUrls[banner.id] = banner.videoUrl;
        }
      }
    });
  }

  private initializeSlider() {
    setTimeout(() => {
      (function ($) {
        dz_rev_slider_4();
        jQuery("#welcome").show().revolution({
          sliderType: "standard",
          sliderLayout: "fullscreen",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false
            }
          },
          responsiveLevels: [4096, 1024, 778, 480],
          gridwidth: [1140, 1024, 778, 480],
          gridheight: [800, 768, 960, 720],
          lazyType: "none",
          parallax: {
            type: "scroll",
            origo: "slidercenter",
            speed: 1000,
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100],
          },
          shadow: 0,
          spinner: "off",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          fullScreenAutoWidth: "off",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: "",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            disableFocusListener: false,
          }
        });
      })(jQuery);
    });
  }

  // URL validation methods
  isYouTubeUrl(url: string): boolean {
    return /youtube\.com|youtu\.be/.test(url);
  }

  isVimeoUrl(url: string): boolean {
    return /vimeo\.com/.test(url);
  }

  isServerVideo(url: string): boolean {
    return /\.(mp4|webm|ogg)$/i.test(url);
  }

  // Embed URL generators
  private getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractYouTubeVideoId(url);
    const params = '?autoplay=1&mute=1&loop=1&playlist=' + videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}${params}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private extractYouTubeVideoId(url: string): string {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  private getVimeoEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVimeoVideoId(url);
    const params = '?autoplay=1&muted=1&loop=1';
    const embedUrl = `https://player.vimeo.com/video/${videoId}${params}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private extractVimeoVideoId(url: string): string {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  navigateTo(url: string): void {
    if (url.includes('#')) {
      const [path, hash] = url.split('#');
      this.router.navigate([path]).then(() => {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    } else {
      this.router.navigate([url]);
    }
  }
}