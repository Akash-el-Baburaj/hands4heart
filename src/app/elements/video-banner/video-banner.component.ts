import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  constructor(private sanitizer: DomSanitizer, private userService: UsersService) {}

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

  // Navigation controls
  nextBanner() {
    this.activeIndex = (this.activeIndex + 1) % this.banners.length;
  }

  prevBanner() {
    this.activeIndex = (this.activeIndex - 1 + this.banners.length) % this.banners.length;
  }

  // URL type checkers
  isYouTubeUrl(url: string): boolean {
    return url?.includes('youtube.com') ;
  }

  isVimeoUrl(url: string): boolean {
    return url?.includes('vimeo.com');
  }

  isServerVideoUrl(url: string): boolean {
    return url?.match(/\.(mp4|webm|ogg)$/) !== null;
  }

  // Safe URL generators
  getSafeYouTubeUrl(url: string): SafeResourceUrl {
    const videoId = this.extractYouTubeVideoId(url);
    // mute=1 parameter ensures video starts muted
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  getSafeVimeoUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVimeoVideoId(url);
    // muted=1 parameter ensures video starts muted
    const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  // Extraction helpers
  private extractYouTubeVideoId(url: string): string {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&?/\s]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  private extractVimeoVideoId(url: string): string {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }
}
