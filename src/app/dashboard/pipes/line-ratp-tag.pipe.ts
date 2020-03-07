import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineRatpTag'
})
export class LineRatpTagPipe implements PipeTransform {
  transform(tag: any): any {
    let tagCss = { 'background-color': '', color: '', display: '', padding: '', 'border-radius': '', border: '' };

    // General css config
    tagCss.display = 'inline-block';
    tagCss['border-radius'] = '50%';
    tagCss.display = 'inline-block';
    tagCss.padding = '4px 11px';
    tagCss.color = '#000';

    if (tag === '1') {
      tagCss['background-color'] = '#ffcd00';
    } else if (tag === '2') {
      tagCss['background-color'] = '#003ca6';
      tagCss.color = '#fff';
    } else if (tag === '3') {
      tagCss['background-color'] = '#837902';
    } else if (tag === '3B') {
      tagCss['background-color'] = '#6ec4e8';
      tagCss.padding = '8px';
    } else if (tag === '4') {
      tagCss['background-color'] = '#be418d';
      tagCss.color = '#fff';
    } else if (tag === '5') {
      tagCss['background-color'] = '#ff7e2e';
    } else if (tag === '6') {
      tagCss['background-color'] = '#6eca97';
    } else if (tag === '7') {
      tagCss['background-color'] = '#fa9aba';
    } else if (tag === '7B') {
      tagCss['background-color'] = '#6eca97';
      tagCss.padding = '8px';
    } else if (tag === '8') {
      tagCss['background-color'] = '#e19bdf';
    } else if (tag === '9') {
      tagCss['background-color'] = '#b6bd00';
    } else if (tag === '10') {
      tagCss['background-color'] = '#c9910d';
      tagCss.padding = '6px 11px';
    } else if (tag === '11') {
      tagCss['background-color'] = '#704b1c';
      tagCss.color = '#fff';
      tagCss.padding = '6px 11px';
    } else if (tag === '12') {
      tagCss['background-color'] = '#007852';
      tagCss.color = '#fff';
      tagCss.padding = '6px 11px';
    } else if (tag === '13') {
      tagCss['background-color'] = '#6ec4e8';
      tagCss.padding = '6px 11px';
    } else if (tag === '14') {
      tagCss['background-color'] = '#62259d';
      tagCss.color = '#fff';
      tagCss.padding = '6px 11px';
    } else if (tag === '15') {
      tagCss['background-color'] = '#a81032';
      tagCss.color = '#fff';
      tagCss.padding = '6px 11px';
    } else if (tag === '16') {
      tagCss['background-color'] = '#e170a7';
      tagCss.color = '#fff';
      tagCss.padding = '6px 11px';
    } else if (tag === '17') {
      tagCss['background-color'] = '#96c047';
      tagCss.padding = '6px 11px';
    } else if (tag === '18') {
      tagCss['background-color'] = '#147a88';
      tagCss.color = '#fff';
      tagCss.padding = '6px 11px';
    } else if (tag === 'A') {
      tagCss['background-color'] = '#fff';
      tagCss.color = '#F7403A';
      tagCss.border = '2px solid #F7403A';
    } else if (tag === 'B') {
      tagCss['background-color'] = '#fff';
      tagCss.color = '#4B92DB';
      tagCss.border = '2px solid #4B92DB';
    } else if (tag === 'C') {
      tagCss['background-color'] = '#fff';
      tagCss.color = '#F3D311';
      tagCss.border = '2px solid #F3D311';
    } else if (tag === 'D') {
      tagCss['background-color'] = '#fff';
      tagCss.color = '#3F9C35';
      tagCss.border = '2px solid #3F9C35';
    } else if (tag === 'E') {
      tagCss['background-color'] = '#fff';
      tagCss.color = '#DE81D3';
      tagCss.border = '2px solid #DE81D3';
    }
    return tagCss;
  }
}
