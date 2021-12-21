import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees  : any;

  constructor(private _employeeService: EmployeeService ) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data );
  }

}
// C:\Users\shehz\OneDrive\Desktop\Angular\angular-learnings\push\angular-learning\src