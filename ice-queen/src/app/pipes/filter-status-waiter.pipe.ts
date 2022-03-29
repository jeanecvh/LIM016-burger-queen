import { Pipe, PipeTransform } from '@angular/core';
import { DataUpdate } from '../models/orders';

@Pipe({
  name: 'filterStatusWaiter'
})
export class FilterStatusWaiterPipe implements PipeTransform {

  transform(values: DataUpdate[], args: string, args2: string, args3:string): DataUpdate[] {
    let result: DataUpdate [] = [];
    if (args != '' || args2 != '' || args3 != '') {
      result = values.filter((e: DataUpdate) => e.data.status == args || e.data.status == args2 || e.data.status == args3)
    }
    return result
  }

}
