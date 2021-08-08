import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'educationFilter'
})
export class EducationFilterPipe implements PipeTransform {

  transform(value: User[], filterEdu?: any): User[] {
    filterEdu=filterEdu?filterEdu.toLocaleLowerCase():null
    return filterEdu?value.filter((u:User)=>u.educationLevel.toLocaleLowerCase()==filterEdu):value;  }

}
