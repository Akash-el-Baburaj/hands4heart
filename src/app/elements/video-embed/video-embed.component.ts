import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css']
})
export class VideoEmbedComponent implements OnChanges, OnInit {

  @Input() VideoURL: SafeResourceUrl | null = '';
  @Input() VideoType: string = '';

  videoEmbedUrl: SafeResourceUrl | null = '';
  videoEmbedType: string | null = '';
  duration: number | null = null;
  isLoading: boolean = true;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['VideoURL']) {
      this.videoEmbedUrl = this.VideoURL;
      this.videoEmbedType = this.VideoType
     
    }
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  onMetadataLoaded(video: HTMLVideoElement): void {
    this.duration = video.duration; // Get video duration in seconds
  }

  onVideoEnded(video: HTMLVideoElement): void {
    video.autoplay = false; // Stop autoplay after the first play
    console.log('Video ended. Autoplay disabled.');
  }

  onVideoCanPlay(): void {
    console.log('Video is ready to play');
    this.isLoading = false; // Hide the loader when the video is ready
  }

}
