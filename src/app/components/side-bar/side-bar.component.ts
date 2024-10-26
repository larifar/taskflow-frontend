import { Component, HostBinding, HostListener } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(private router: Router) {}
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 700;
  }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 700;
  }

  goToTasks(){
    this.router.navigate([''])
  }

  goToConfig(){
    this.router.navigate([''])
  }

}
