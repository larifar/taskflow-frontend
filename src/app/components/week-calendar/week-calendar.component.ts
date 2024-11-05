import { Component } from '@angular/core';
import { DayComponent } from "../day/day.component";
import { TaskComponent } from "../task/task.component";


@Component({
  selector: 'app-week-calendar',
  standalone: true,
  imports: [DayComponent, TaskComponent],
  templateUrl: './week-calendar.component.html',
  styleUrl: './week-calendar.component.css'
})
export class WeekCalendarComponent {

}
