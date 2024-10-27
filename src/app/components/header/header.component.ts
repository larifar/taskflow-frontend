import { Component, Output, EventEmitter } from '@angular/core';
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
  isLight: boolean = true;

  @Output() themeChange = new EventEmitter<boolean>();

  goToUser(){
    this.router.navigate(['/user'])
  }

  goHome(){
    this.router.navigate([''])
  }

  toggleTheme(){
    this.isLight=!this.isLight;
    this.themeChange.emit(!this.isLight);
  }

  changeIcon():string{
    return this.isLight? "../../../assets/png/sol.png" : "../../../assets/png/moon.png"
  }
}
