import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './MyComponents/department-list/department-list.component';
import { StudentListComponent } from './MyComponents/student-list/student-list.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './MyComponents/department-detail/department-detail.component';
import { DepartmentContactComponent } from './MyComponents/department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './MyComponents/department-overview/department-overview.component';

const routes: Routes = [
  {path : '' , redirectTo : '/departments' , pathMatch : 'full' },
  {path : 'departments' , component : DepartmentListComponent},
  {path : 'departments/:id' , 
  component : DepartmentDetailComponent,
  children : [
    {path : 'overview' , component : DepartmentOverviewComponent },
    {path : 'contact' , component :  DepartmentContactComponent }

  ]   
},
  {path : 'students' , component : StudentListComponent },
  {path : '**' , component : PageNotFoundComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent , StudentListComponent , PageNotFoundComponent , DepartmentDetailComponent , DepartmentContactComponent , DepartmentOverviewComponent ]
