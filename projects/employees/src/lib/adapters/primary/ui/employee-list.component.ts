import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { DepartmentDTO } from '../../../application/ports/secondary/department.dto';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({
  selector: 'lib-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
employees$: Observable<EmployeeDTO[]> = of([
{
  id: '1',
  name: 'Janek',
  imageUrl: 'https://topmejt.co.uk/wp-content/uploads/2016/11/ja-fasola-rowan-atkinson-mi-pluszak-niedwied-zabawka-mr-bean.jpg',
  bio: 'Lider naszego teamu. Absolwent Wyższej Szkoły Ekspresowej Rozbiórki, jedyny w swoim rodzaju, bardzo doświadczony, niewiele pijący w trakcie pracy Janek.',
  department: [
    {
      name: 'Budowlanka',
      employeeCount: 3
    },
  ]
},
{
  id: '2',
  name: 'Jasiek',
  imageUrl: 'https://s3.viva.pl/newsy/rowan-atkinson-2007-rok-kadry-z-filmu-mr-beans-holiday-575389-GALLERY_BIG.jpg',
  bio: 'Duch naszego teamu. Twórca fantastycznej atmosfery, zawsze wesoły, radosny i uśmiechnięty Jasiek.',
  department: [
    {
      name: 'Budowlanka',
      employeeCount: 3
    }
  ]
},
{
  id: '3',
  name: 'Fasol',
  imageUrl: 'https://ocdn.eu/pulscms-transforms/1/84Hk9kpTURBXy81Njc5YjI4YWIzNTQ4MzVkOTZkYjE0NzdiNTEyNmIxOC5qcGeRkwLNA0jNAjCCoTABoTEB',
  bio: 'Mózg naszego teamu. Uczestnik wielu kursów budowania online, mól książkowy, wszystkie zagadnienia architekury ma w małym palcu, a rysunki techniczne robi z zamkniętymi oczami - Fasol.',
  department: [
    {
      name: 'Budowlanka',
      employeeCount: 3
    }
  ]
},
 ]);
 department$: Observable<DepartmentDTO>=of(
   {
     name: 'Budowlanka',
     employeeCount: 3
   }
 )
}
