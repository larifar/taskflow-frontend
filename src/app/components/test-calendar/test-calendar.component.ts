import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-test-calendar',
  standalone: true,
  imports: [DayComponent, TaskComponent, NgFor],
  templateUrl: './test-calendar.component.html',
  styleUrl: './test-calendar.component.css',
})
export class TestCalendarComponent {
  ngOnInit() {
    this.setRow(this.tasks);
  }

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
    { title: 'Reunião', initialDay: 1, final: 3 },
    { title: 'Desenvolvimento', initialDay: 2, final: 5 },
    { title: 'Design Review', initialDay: 5, final: 7 },
  ];

  isToday(n: string): boolean {
    let transformed = Number(n);
    return true ? transformed === 1 : false;
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
}
