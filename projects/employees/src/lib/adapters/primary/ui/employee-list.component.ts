import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({
  selector: 'lib-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
    employee: EmployeeDTO = {
        title: "JANEK",
        image: "https://topmejt.co.uk/wp-content/uploads/2016/11/ja-fasola-rowan-atkinson-mi-pluszak-niedwied-zabawka-mr-bean.jpg"
    }
    employee2: EmployeeDTO = {
        title: "JASIEK",
        image: "https://s3.viva.pl/newsy/rowan-atkinson-2007-rok-kadry-z-filmu-mr-beans-holiday-575389-GALLERY_BIG.jpg"
    }
    employee3: EmployeeDTO = {
        title: "FASOL",
        image: "https://ocdn.eu/pulscms-transforms/1/84Hk9kpTURBXy81Njc5YjI4YWIzNTQ4MzVkOTZkYjE0NzdiNTEyNmIxOC5qcGeRkwLNA0jNAjCCoTABoTEB"
    }
}
