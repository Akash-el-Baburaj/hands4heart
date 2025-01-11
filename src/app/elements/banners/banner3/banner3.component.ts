import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner3',
  templateUrl: './banner3.component.html',
  styleUrls: ['./banner3.component.css']
})
export class Banner3Component {
	@Input() data : any;
}
