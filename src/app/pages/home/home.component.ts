import { Component } from '@angular/core';
import { WeekCalendarComponent } from '../../components/week-calendar/week-calendar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WeekCalendarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
