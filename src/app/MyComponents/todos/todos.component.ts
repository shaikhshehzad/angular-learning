import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public colors = [ "red","purple", "ornge", "green"]
  public color = "orange";
  public namee = "";
  public name = "shehzad Shaikh ";
  public company = "Sears Holding ";
  public code = "IN668";
  public siteurl = window.location.href ;
  public myid = "testid" ;
  public isdisabled  = false ;
  public successClass = "text-danger";
  public haserror  = true ;
  public isSpecial = true ;
  // public displayName = true;
  public messageClasses = {
    "text-success": !this.haserror,
    "text-danger": this.haserror,
    "text-special" : this.isSpecial
  }
  public traill = {
    "shehzad":"Shaikh",
    "shehzad2":"Shaikh",
    "shehzad3":"Shaikh",
    "shehzad4":"Shaikh",

  }
  // setting up services 
  
  // public employee = [
  //   { "id": 1 , "name" : "andrew" , "age" : 30 },
  //   { "id": 2 , "name" : "andrew2" , "age" : 31 },
  //   { "id": 3 , "name" : "andrew3" , "age" : 32 },
  //   { "id": 4 , "name" : "andrew4" , "age" : 33 },
  //   { "id": 5 , "name" : "andrew5" , "age" : 34 },
  // ]

  public titlestyles = {
    color : "blue",
    fontStyle : "italic"
  }
  public greetings = "";
  todos : Todo[];
  displayName = false;


  public employee = []

  constructor(private _employeeService : EmployeeService) {
    this.todos = [
      {
        sno : 3 ,
        title : "this is title ",
        desc : "desc",
        active : true
      },
      {
        sno : 1 ,
        title : "this is title 1 ",
        desc : "desc",
        active : true
      },
      {
        sno : 2  ,
        title : "this is title 2 ",
        desc : "desc",
        active : true
      },
      {
        sno : 3 ,
        title : "this is title ",
        desc : "desc",
        active : true
      },
      {
        sno : 1 ,
        title : "this is title 1 ",
        desc : "desc",
        active : true
      },
      {
        sno : 2  ,
        title : "this is title 2 ",
        desc : "desc",
        active : true
      }
    ]
   }
  ngOnInit(): void {
  // this.employee = this._employeeService.getEmployees();
}
  

  greetUser(){
    return `Welcome to ${this.company} ${this.name} your Employee code is ${this.code} and page url is ${this.siteurl}`;
  }

  onClick(){
    console.log("Welcome To sears India");
    this.greetings = "Welcome Shehzad :" ;
  }
  onClickk(){
    console.log("Welcome To sears India");
    this.greetings = "" ;
  }

  logmessage(){
    console.log("hi");
  }
}
