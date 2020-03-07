import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeLine'
})
export class TypeLinePipe implements PipeTransform {
  transform(typeLine: any): string {
    if (!isNaN(typeLine) || typeLine === '3B' || typeLine === '7B') {
      return 'M';
    }
    return 'RER';
  }
}
