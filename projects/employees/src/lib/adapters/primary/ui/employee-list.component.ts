import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({
  selector: 'lib-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
 employees = of([
  {
    src: 'https://topmejt.co.uk/wp-content/uploads/2016/11/ja-fasola-rowan-atkinson-mi-pluszak-niedwied-zabawka-mr-bean.jpg',
    alt: 'fotka Janka',
    name: 'Janek',
    description: 'Lider naszego teamu. Absolwent Wyższej Szkoły Ekspresowej Rozbiórki, jedyny w swoim rodzaju, bardzo doświadczony, niewiele pijący w trakcie pracy Janek.'
  },
  {
    src: 'https://s3.viva.pl/newsy/rowan-atkinson-2007-rok-kadry-z-filmu-mr-beans-holiday-575389-GALLERY_BIG.jpg',
    alt: 'fotka Jaśka',
    name: 'Jasiek',
    description: 'Duch naszego teamu. Twórca fantastycznej atmosfery, zawsze wesoły, radosny i uśmiechnięty Jasiek.'
  },
   {
     src: 'https://ocdn.eu/pulscms-transforms/1/84Hk9kpTURBXy81Njc5YjI4YWIzNTQ4MzVkOTZkYjE0NzdiNTEyNmIxOC5qcGeRkwLNA0jNAjCCoTABoTEB',
    alt: 'fotka Fasola',
    name: 'Fasol',
    description: 'Mózg naszego teamu. Uczestnik wielu kursów budowania online, mól książkowy, wszystkie zagadnienia architekury ma w małym palcu, a rysunki techniczne robi z zamkniętymi oczami - Fasol.'
  }
 ]);
}
