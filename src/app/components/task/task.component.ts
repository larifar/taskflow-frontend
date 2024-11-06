import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'app-task-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

@Input() title : string = "";
@Input() percentage : string = "0";
@Input() color: string = 'gray';
@Input() days: number = 1;
}
