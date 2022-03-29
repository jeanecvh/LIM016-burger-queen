import { Pipe, PipeTransform } from '@angular/core';
import { DataUpdate } from '../models/orders';



@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(values: DataUpdate[], args: string, args2: string): DataUpdate[] {
    let result: DataUpdate [] = [];
    if (args != '' || args2 != '') {
      result = values.filter((e: DataUpdate) => e.data.status == args || e.data.status == args2)
    }
    return result
  }
}
