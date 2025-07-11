import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface type{
  img:string;
  name: string;
  position: string;
  url: string;
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
 constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/program']);
    }, 10000); // 10 seconds
  }


}
