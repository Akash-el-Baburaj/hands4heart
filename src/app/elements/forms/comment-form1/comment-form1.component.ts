import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-form1',
  templateUrl: './comment-form1.component.html',
  styleUrls: ['./comment-form1.component.css']
})
export class CommentForm1Component {
  @Input() data : any;
}
