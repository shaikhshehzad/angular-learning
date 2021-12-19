import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './MyComponents/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './MyComponents/employee-detail/employee-detail.component';

@NgModule({
  // declarations has all the components that are we going to use .
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    // these are the different types of modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
