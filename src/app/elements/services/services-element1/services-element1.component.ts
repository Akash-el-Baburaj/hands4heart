import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-element1',
  templateUrl: './services-element1.component.html',
  styleUrls: ['./services-element1.component.css']
})
export class ServicesElement1Component {

	@Input()  data : any;
	
}
