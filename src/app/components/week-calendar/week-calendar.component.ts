import { Component } from '@angular/core';
import { DayComponent } from "../day/day.component";

@Component({
  selector: 'app-week-calendar',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './week-calendar.component.html',
  styleUrl: './week-calendar.component.css'
})
export class WeekCalendarComponent {

}
