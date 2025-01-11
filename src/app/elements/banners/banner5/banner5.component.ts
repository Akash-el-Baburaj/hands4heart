import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner5',
  templateUrl: './banner5.component.html',
  styleUrls: ['./banner5.component.css']
})
export class Banner5Component {
  @Input() data : any;

}
