import { Component, HostBinding, HostListener,  Inject,  PLATFORM_ID  } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}
  isMobile = false;
  @HostBinding('class.expanded') isExpanded = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 700;
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 700;
    }
  }

  goToTasks(){
    this.router.navigate([''])
  }

  goToConfig(){
    this.router.navigate([''])
  }

  toggleOptions(){
    this.isExpanded = !this.isExpanded;
  }

  show():boolean{
    if(this.isMobile && this.isExpanded){
      return false;
    }
    if(!this.isMobile){
      return false;
    }
    return true;
  }

  iconOption(): string{
    return this.isExpanded?  '../../../assets/png/close.png' : '../../../assets/png/plus (1).png'
  }

}
