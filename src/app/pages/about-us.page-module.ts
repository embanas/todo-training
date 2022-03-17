import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { EmployeeListComponentModule, FirebaseEmployeesServiceModule } from '@employees';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
      },
    ]),
    EmployeeListComponentModule,
    FirebaseEmployeesServiceModule
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
