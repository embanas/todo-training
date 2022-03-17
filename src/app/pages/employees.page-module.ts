import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { EmployeeListComponentModule } from '@employees';
import { FirebaseEmployeesServiceModule } from '../../../projects/employees/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeesPage,
        }
      ]),
  EmployeeListComponentModule,
  FirebaseEmployeesServiceModule
],
  	declarations: [EmployeesPage],
  	providers: [],
  	exports: [] })
export class EmployeesPageModule {
}
