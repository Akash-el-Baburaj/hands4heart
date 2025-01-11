import { Component } from '@angular/core';
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
  selector: 'app-large-image',
  templateUrl: './large-image.component.html',
  styleUrls: ['./large-image.component.css']
})
export class LargeImageComponent {
	banner : any = {
		pagetitle: "Blog large image",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog large image",
	}
	layout : any = {	
		sidebar: false,
		sidebarPosition:""
	}

	gridData: type[] = [
		{
			img: 'assets/images/blog/grid/pic3.jpg',
			title: 'Five Things Nobody Told You About',
			titleUrl: '/blog-single',
			postType: 'Education',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
			date: '04 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic1.jpg',
			title: 'Why is Early Education Essential?',
			titleUrl: '/blog-single',
			postType: 'Event',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
			date: '01 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic2.jpg',
			title: 'The Shocking Revelation of Education.',
			titleUrl: '/blog-single',
			postType: 'education',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
			date: '01 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic1.jpg',
			title: 'How Education Can Ease Your Pain ',
			titleUrl: '/blog-single',
			postType: 'education',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
			date: '05 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic4.jpg',
			title: 'Here\'s What People Are Saying About',
			titleUrl: '/blog-single',
			postType: 'knowledge',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
			date: '05 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		},
		{
			img: 'assets/images/blog/grid/pic2.jpg',
			title: 'Why is Early Education Essential?',
			titleUrl: '/blog-single',
			postType: 'Event',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
			date: '01 December 2024',
			icon: ["facebook fa fa-facebook", "twitter fa fa-twitter", "linkedin fa fa-linkedin", "instagram fa fa-instagram"]
		}
	]

}
