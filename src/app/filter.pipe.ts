import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: any, value: any): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }
    return items.filter(singleItem =>
      singleItem[field].toLowerCase().includes(value.toLowerCase())
    );
  }
}
