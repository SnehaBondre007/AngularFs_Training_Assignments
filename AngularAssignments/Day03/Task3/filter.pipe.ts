import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputData:any[], min:number, max:number): any[]
  {
  
    return inputData.filter(function(x) {
      return x.sal >=min && x.sal<= max });
  }

}
//item=> item.sal > min && item.sal < max