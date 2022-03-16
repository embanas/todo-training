import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { EmployeeListComponentModule } from '@employees';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeesPage,
        }
      ]),
  EmployeeListComponentModule
],
  	declarations: [EmployeesPage],
  	providers: [],
  	exports: [] })
export class EmployeesPageModule {
}
