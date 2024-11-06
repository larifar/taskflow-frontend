import { Injectable } from '@angular/core';

export interface weekDay {
  column: number;
  day: number;
  week: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeekServiceService {

  constructor() { }

  getWeekDays(): weekDay[] {
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const today = new Date();

    const offsetToMonday = today.getDay() === 0 ? -6 : 1 - today.getDay();
    const mondayDate = today.getDate() + offsetToMonday;

    const thisWeek = Array.from({ length: 7 }, (_, index) => {
      const currentDate = new Date(today);
      currentDate.setDate(mondayDate + index);

      return {
        column: index + 1,
        day: currentDate.getDate(),
        week: daysOfWeek[currentDate.getDay()],
      };
    });

    return thisWeek;
  }
}

