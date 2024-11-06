import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { TaskComponent } from '../task/task.component';
import { weekDay, WeekServiceService } from '../../services/week-service.service';


@Component({
  selector: 'app-week-calendar',
  standalone: true,
  imports: [DayComponent, TaskComponent, NgFor],
  templateUrl: './week-calendar.component.html',
  styleUrl: './week-calendar.component.css'
})
export class WeekCalendarComponent {
  constructor(private service:WeekServiceService){}

  ngOnInit() {
    this.setRow(this.tasks);
    this.thisWeek = this.service.getWeekDays();
  }

  thisWeek: weekDay[] = []

  days = [
    { name: 'Segunda', column: '1' },
    { name: 'Terça', column: '2' },
    { name: 'Quarta', column: '3' },
    { name: 'Quinta', column: '4' },
    { name: 'Sexta', column: '5' },
    { name: 'Sábado', column: '6' },
    { name: 'Domingo', column: '7' },
  ];

  tasks: Task[] = [
    { title: 'Reunião', initialDay: 1, final: 3, percentage: 10 },
    { title: 'Desenvolvimento', initialDay: 2, final: 5, percentage: 20 },
    { title: 'Design Review', initialDay: 5, final: 7, percentage: 50 },
    { title: 'Final', initialDay: 6, final: 7, percentage: 80 },
    { title: 'Conceito personagem', initialDay: 1, final: 4, percentage: 100 },
  ];

  setDeadLine(i : number, f: number){
    return f - i;
  }

  isToday(n: number): boolean {
    const today = new Date();
    return true ? n == today.getDay() : false;
  }

  setColumn(start: number, final: number): string {
    return start + ' / ' + final;
  }

  setRow(tasks: Task[]): void {
    const rows: Task[][] = [];

    tasks.forEach((task) => {
      let placed = false;

      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const row = rows[rowIndex];
        const conflict = row.some(
          (existingTask) =>
            task.initialDay <= existingTask.final &&
            task.final >= existingTask.initialDay
        );

        if (!conflict) {
          task.rowStart = rowIndex + 2;
          task.rowEnd = rowIndex + 3;
          row.push(task);
          placed = true;
          break;
        }
      }

      if (!placed) {
        task.rowStart = rows.length + 2;
        task.rowEnd = rows.length + 3;
        rows.push([task]);
      }
    });
  }
}

interface Task {
  title: string;
  initialDay: number;
  final: number;
  rowStart?: number;
  rowEnd?: number;
  percentage: number;
}

