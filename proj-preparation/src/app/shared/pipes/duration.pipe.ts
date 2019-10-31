import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(duration: number) {
    if (duration) {
      const mins = duration % 60;
      const hours = (duration - mins) /  60;
      return `${hours ? `${hours} h` : ''} ${mins} min`;
    }
  }
}
