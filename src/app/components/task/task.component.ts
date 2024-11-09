import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-task-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() title: string = '';
  @Input() percentage: number = 0;
  @Input() color: string = 'gray';
  @Input() days: number = 1;
  @Input() onClick! : () => void;

  getProgressColor(): string {
    if (this.percentage <= 10) return 'red';
    if (this.percentage > 10 && this.percentage <= 30) return 'orange';
    if (this.percentage > 30 && this.percentage <= 70) return 'yellow';
    if (this.percentage > 70 && this.percentage < 100) return 'lightgreen';
    return 'darkgreen';
  }
}
