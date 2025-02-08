import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormate'
})
export class TimeFormatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    let [hours, minutes] = value.split(':').map(Number);
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  }

}
