import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  @ViewChild('themeIcon') themeIcon!: ElementRef;
  isLight: boolean = true;
  isTransitioning = false;

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

  toggleAnimation() {
    if (this.isTransitioning) {
      return;
    }

    this.isTransitioning = true;

    setTimeout(() => {
      this.toggleTheme();
      this.isTransitioning = false;
    }, 580);
  }

  changeIcon():string{
    return this.isLight? "../../../assets/png/sol.png" : "../../../assets/png/moon.png"
  }
}
