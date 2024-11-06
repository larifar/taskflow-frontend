import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  @Input() day: number= 1;
  @Input() weekDay: string= "segunda";
  @Input() isToday: boolean = false;

  @HostBinding('class.is-today') get todayClass(){
    return this.isToday
  }
}
