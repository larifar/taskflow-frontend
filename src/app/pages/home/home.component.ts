import { Component } from '@angular/core';
import { WeekCalendarComponent } from '../../components/week-calendar/week-calendar.component';
import { TestCalendarComponent } from "../../components/test-calendar/test-calendar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WeekCalendarComponent, TestCalendarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
