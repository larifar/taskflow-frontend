import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { TaskComponent } from '../task/task.component';
import { weekDay, WeekServiceService } from '../../services/week-service.service';
import { DragDropModule, moveItemInArray, CdkDragDrop, CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-week-calendar',
  standalone: true,
  imports: [DayComponent, TaskComponent, NgFor, DragDropModule],
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

  tasks: Task[] = [
    { title: 'Reunião', initialDay: 1, final: 3, percentage: 10 },
    { title: 'Desenvolvimento', initialDay: 2, final: 5, percentage: 20 },
    { title: 'Design Review', initialDay: 5, final: 7, percentage: 50 },
    { title: 'Final', initialDay: 6, final: 7, percentage: 80 },
    { title: 'Conceito personagem', initialDay: 1, final: 4, percentage: 100 },
  ];

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    this.setRow(this.tasks);
  }

  onDragStarted(event: CdkDragStart) {
    document.body.classList.add('dragging');
  }

  onDragEnded(event: CdkDragEnd) {
    document.body.classList.remove('dragging');
  }

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

