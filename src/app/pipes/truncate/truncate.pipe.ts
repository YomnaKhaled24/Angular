import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length <= 20) {
      return value;
    }
    return value.substring(0, 20) + '...';
  }

}
