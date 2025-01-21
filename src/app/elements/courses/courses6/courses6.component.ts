import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-courses6',
  templateUrl: './courses6.component.html',
  styleUrls: ['./courses6.component.css']
})
export class Courses6Component implements OnChanges {

  @Input()  data: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('details data =< ', this.data)
    }
  }

}
