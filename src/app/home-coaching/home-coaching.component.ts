import { Component } from '@angular/core';

@Component({
  selector: 'app-home-coaching',
  templateUrl: './home-coaching.component.html',
  styleUrls: ['./home-coaching.component.css']
})
export class HomeCoachingComponent {

  login:boolean=false;

  ngOnInit(): void {
     this.login= localStorage.getItem('userId')?true:false;

  }


}
