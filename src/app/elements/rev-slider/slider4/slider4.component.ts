import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/service/users.service';
import { Banners, Banner } from 'src/app/core/model/banners.model';

declare  var jQuery:  any;
declare  var dz_rev_slider_4:  any;

@Component({
  selector: 'app-slider4',
  templateUrl: './slider4.component.html',
  styleUrls: ['./slider4.component.css']
})
export class Slider4Component implements OnInit, AfterViewInit {

  videoUrl: string = ''; // Raw video URL (from YouTube or Vimeo)
  videoType: 'youtube' | 'vimeo' | 'local' = 'youtube'; // Type of video (YouTube, Vimeo)
  sanitizedYouTubeUrl: SafeResourceUrl | null = null;
  sanitizedVimeoUrl: SafeResourceUrl | null = null;
  page: number = 1;
  banners: Banner[] = [];
  safeBanners: { [key: string]: SafeResourceUrl } = {};


  constructor(private sanitizer: DomSanitizer, private router: Router, private userService: UsersService) { }
  ngOnInit(): void {
     this.videoUrl = 'https://www.youtube.com/watch?v=DUaxt8OlT3o'; // Change this dynamically
     this.getBanner();
    // this.processVideoUrl();
	  // (function ($) {
    //     dz_rev_slider_4();
    // })(jQuery);
    jQuery(document).ready(function () {
      jQuery("#slider").on("revolution.slide.onloaded", function () {
          const videoElement:any = document.querySelector('video[src="assets/video/cpr.mp4"]');
          if (videoElement) {
              videoElement.muted = true; // Ensure muting is enforced after library initialization
          }
      });
  });
  
    
  }

  ngAfterViewInit(): void {
    // Ensure that jQuery is executed after Angular renders the view
    setTimeout(() => {
      (function ($) {
        dz_rev_slider_4();
      })(jQuery);
    });
  }


  getBanner() {
    this.userService.getBanners(this.page).subscribe({
      next: (res: Banners) => {
        if (res.success) {
          this.banners = res.data.banner;
          this.banners.forEach(banner => {
            // Sanitize URLs based on banner type
            this.safeBanners[banner.id] = this.sanitizer.bypassSecurityTrustResourceUrl(`${banner.videoUrl}ddsds?autoplay=1&mute=1`);
          });
        }
      },
      error: (err: any) => {
        console.error('Error fetching banners:', err);
      }
    });
  }


  processVideoUrl(data: any): void {
    if (data.includes('youtube.com') || data.includes('youtu.be')) {
      this.videoType = 'youtube';
      this.sanitizedYouTubeUrl = this.getYouTubeEmbedUrl(data);
    } else if (data.includes('vimeo.com')) {
      this.videoType = 'vimeo';
      this.sanitizedVimeoUrl = this.getVimeoEmbedUrl(data);
    }
  }

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    // const videoId = this.extractYouTubeVideoId(url);
    // const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  extractYouTubeVideoId(url: string): string {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&?/\s]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  getVimeoEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVimeoVideoId(url);
    const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  extractVimeoVideoId(url: string): string {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  navigateTo(url: string): void {
    // Check if the URL contains a hash (e.g., #register)
    if (url.includes('#')) {
      const [path, hash] = url.split('#');
      this.router.navigate([path]); // Navigate to the path (e.g., '/home-coaching')
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0); // Delay to ensure the router navigates first
    } else {
      // Normal navigation for full routes
      this.router.navigate([url]);
    }
  }
}
