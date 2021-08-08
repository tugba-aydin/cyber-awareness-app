import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(value: User[], filterGender?: any): User[] {
    filterGender=filterGender?filterGender.toLocaleLowerCase():null
    console.log(filterGender)
    return filterGender?value.filter((u:User)=>u.gender.toLocaleLowerCase().indexOf(filterGender)!==-1):value;
  }

}
