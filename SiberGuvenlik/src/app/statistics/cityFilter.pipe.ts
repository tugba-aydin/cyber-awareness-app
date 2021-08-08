import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(value: User[], filterText?: any): User[] {
    filterText=filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((u:User)=>u.city.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
