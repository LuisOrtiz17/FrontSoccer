import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'theme'
})
export class ThemePipe implements PipeTransform {

  transform(value: boolean){
    return (value) ? 'Ligth' : 'Dark';
  }

}
