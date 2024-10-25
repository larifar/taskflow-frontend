import { Component } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
