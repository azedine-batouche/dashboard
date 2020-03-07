import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeCss'
})
export class TypeCssPipe implements PipeTransform {
  transform(typeLine: string): any {
    const styleCss = {
      border: '1px solid #0a0082',
      'border-radius': '50%',
      color: '#0a0082',
      padding: '8px',
      'margin-right': '5px'
    };
    if (typeLine === 'M') {
      styleCss.padding = '2px 8px';
    }
    return styleCss;
  }
}
