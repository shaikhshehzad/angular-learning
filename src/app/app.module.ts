import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './MyComponents/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './MyComponents/employee-detail/employee-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentListComponent } from './MyComponents/department-list/department-list.component';
import { StudentListComponent } from './MyComponents/student-list/student-list.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './MyComponents/department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './MyComponents/department-overview/department-overview.component';
import { DepartmentContactComponent } from './MyComponents/department-contact/department-contact.component'

@NgModule({
  // declarations has all the components that are we going to use .
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DepartmentListComponent,
    StudentListComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
  ],
  imports: [
    // these are the different types of modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
