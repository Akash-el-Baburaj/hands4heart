import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.css']
})
export class Banner1Component {
  @Input() data : any;
}
