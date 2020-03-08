import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageColor'
})
export class MessageColorPipe implements PipeTransform {
  transform(message: string): string {
    let messageColor = 'text-warning';


    if (message && message === "Trafic normal sur l'ensemble de la ligne.") {
      return (messageColor = 'text-white');
    }
    return messageColor;
  }
}
