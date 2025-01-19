import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare  var jQuery:  any;
declare  var dz_rev_slider_4:  any;

@Component({
  selector: 'app-slider4',
  templateUrl: './slider4.component.html',
  styleUrls: ['./slider4.component.css']
})
export class Slider4Component {

  videoUrl: string = ''; // Raw video URL (from YouTube or Vimeo)
  videoType: 'youtube' | 'vimeo' | 'local' = 'youtube'; // Type of video (YouTube, Vimeo)
  sanitizedYouTubeUrl: SafeResourceUrl | null = null;
  sanitizedVimeoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer, private router: Router) { }
  ngOnInit(): void {
     this.videoUrl = 'https://www.youtube.com/watch?v=DUaxt8OlT3o'; // Change this dynamically
    this.processVideoUrl();
	  (function ($) {
        dz_rev_slider_4();
    })(jQuery);
  }


  processVideoUrl(): void {
    if (this.videoUrl.includes('youtube.com') || this.videoUrl.includes('youtu.be')) {
      this.videoType = 'youtube';
      this.sanitizedYouTubeUrl = this.getYouTubeEmbedUrl(this.videoUrl);
    } else if (this.videoUrl.includes('vimeo.com')) {
      this.videoType = 'vimeo';
      this.sanitizedVimeoUrl = this.getVimeoEmbedUrl(this.videoUrl);
    }
  }

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractYouTubeVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
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
