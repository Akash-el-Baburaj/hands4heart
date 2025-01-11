import { Component } from '@angular/core';
declare  var jQuery:  any;

interface type {
	img: string,
	title: string,
	titleUrl: string,
	postType: string,
	description: string,
	date: string,
	icon?:string[];
}

@Component({
  selector: 'app-grid2-sidebar-left',
  templateUrl: './grid2-sidebar-left.component.html',
  styleUrls: ['./grid2-sidebar-left.component.css']
})
export class Grid2SidebarLeftComponent {

	banner : any = {
		pagetitle: "Blog large image left sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog large image left sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"left",
		gridClass:"col-lg-6"
	}

  constructor() { }

	ngOnInit(): void {
		(function ($) {
			
			var self = jQuery("#masonry, .masonry");
				self.imagesLoaded(function () {
					self.masonry({
						gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container"
					});
				});
			
		})(jQuery);
	}
	gridData: type[] = [
		{
			img: 'assets/images/blog/grid/pic1.jpg',
			title: 'Why is Early Education Essential?',
			titleUrl: '/blog-single',
			postType: 'Event',
			description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
			date: '01 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic2.jpg',
			title: 'The Shocking Revelation of Education.',
			titleUrl: '/blog-single',
			postType: 'education',
			description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
			date: '01 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic3.jpg',
			title: 'Five Things Nobody Told You About',
			titleUrl: '/blog-single',
			postType: 'Education',
			description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
			date: '04 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic4.jpg',
			title: 'Here\'s What People Are Saying About',
			titleUrl: '/blog-single',
			postType: 'knowledge',
			description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
			date: '05 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic1.jpg',
			title: 'How Education Can Ease Your Pain ',
			titleUrl: '/blog-single',
			postType: 'education',
			description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
			date: '05 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic2.jpg',
			title: 'Why is Early Education Essential?',
			titleUrl: '/blog-single',
			postType: 'Event',
			description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
			date: '01 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		}
	]
}
