import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Banner, Banners } from 'src/app/core/model/banners.model';
import { UsersService } from 'src/app/core/service/users.service';
@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css']
})
export class VideoBannerComponent implements OnInit {
  activeIndex = 0;
  banners: Banner[] = [];
  page: number = 1;
  currentIndex = 0;

  constructor(private sanitizer: DomSanitizer, private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.getBanner();
  }

  getBanner() {
    this.userService.getBanners(this.page).subscribe({
      next: (res: Banners) => {
        if (res.success) {
          this.banners = res.data.banner;
        }
      },
      error: (err) => console.error('Error fetching banners:', err)
    });
  }


  get currentBanner() {
    return this.banners[this.currentIndex];
  }

  isExternalVideo(url: string): boolean {
    return url.includes('youtube') || url.includes('vimeo');
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    if(url.includes('youtube')) {
      const videoId = url.split('v=')[1];
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`
      );
    }
    if(url.includes('vimeo')) {
      const videoId = url.split('/').pop();
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1`
      );
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  changeBanner(direction: number) {
    this.currentIndex = (this.currentIndex + direction + this.banners.length) % this.banners.length;
    this.animateBannerChange();
  }

  animateBannerChange() {
    // Add your animation logic here
    const container = document.querySelector('.banner-media');
    container?.classList.add('parallax-effect');
    setTimeout(() => {
      container?.classList.remove('parallax-effect');
    }, 500);
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
declare var $: any;

// In animateBannerChange()
$('.banner-media').animate({
  opacity: 0.5
}, 300).animate({
  opacity: 1
}, 300);