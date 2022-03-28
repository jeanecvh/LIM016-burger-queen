import { Pipe, PipeTransform } from '@angular/core';
import { Orders,DataUpdate } from '../models/orders';
import  { GetOrderStatusService } from '../services/get-order-status.service'



@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(values: DataUpdate[], args: string): DataUpdate[] {
    let result: DataUpdate [] = [];
    if (args != '') {
      result = values.filter((e: DataUpdate) => e.data.status == args)
    }
    return result
  }
}
