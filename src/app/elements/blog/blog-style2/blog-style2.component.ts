import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-style2',
  templateUrl: './blog-style2.component.html',
  styleUrls: ['./blog-style2.component.css']
})
export class BlogStyle2Component {
  @Input({ required: true }) newItemEvent!: any;

  image: string = '';
  title: string = '';
  titleUrl: string = '';
  postType: string = '';
  description: string = '';
  date: string = '';
  icon: string = '';
  ngOnInit(){
    this.image = this.newItemEvent.img;
    this.title = this.newItemEvent.title;
    this.titleUrl = this.newItemEvent.titleUrl;
    this.postType = this.newItemEvent.postType;
    this.description = this.newItemEvent.description;
    this.date = this.newItemEvent.date;
    this.icon = this.newItemEvent.icon;
  }
}
