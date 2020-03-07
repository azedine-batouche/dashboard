import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Pipe({
  name: 'timePipe'
})
export class TimePipe implements PipeTransform {
  transform(time: any): string {
    const unitOfTime = 1;
    const minuteInHour = 60;
    const minuteInDay = 1440;
    const nineMinute = 9;
    let printTime: string = "- à l'instant -";
    const timeValue = time;

    if (timeValue >= unitOfTime && timeValue < minuteInHour) {
      printTime =
        timeValue > nineMinute ? '- il y a ' + timeValue + ' minutes -' : '- il y a ' + timeValue + ' minute -';
    } else if (timeValue >= minuteInHour && timeValue < minuteInDay) {
      let hour = Math.floor(timeValue / minuteInHour);
      let minutes = Math.floor(timeValue % minuteInHour);
      printTime = '- il y a ' + hour + 'h' + minutes + 'min -';
    } else if (timeValue >= minuteInDay) {
      let days = Math.floor(timeValue / minuteInDay);
      printTime = days > unitOfTime ? '- il y a ' + days + ' jours' : '- il y a ' + days + ' jour';
    }
    return printTime;
  }
}
