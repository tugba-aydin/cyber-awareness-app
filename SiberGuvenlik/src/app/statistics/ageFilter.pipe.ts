import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'ageFilter'
})
export class AgeFilterPipe implements PipeTransform {

  transform(value: User[], filterNumber?: any): User[] {
    filterNumber=filterNumber?filterNumber:null
    console.log(filterNumber) 
    return filterNumber?value.filter((u:User)=>u.age==filterNumber):value;
    // return filterNumber?value.filter((u:User)=>u.age.toString().indexOf(filterNumber)!==-1):value;
  }

}
