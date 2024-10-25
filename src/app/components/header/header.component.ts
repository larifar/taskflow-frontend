import { Component } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToUser(){
    this.router.navigate(['/user'])
  }

  goHome(){
    this.router.navigate([''])
  }
}
