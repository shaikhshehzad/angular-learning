import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      { "id": 1 , "name" : "andrew" , "age" : 30 },
      { "id": 2 , "name" : "andrew2" , "age" : 31 },
      { "id": 3 , "name" : "andrew3" , "age" : 32 },
      { "id": 4 , "name" : "andrew4" , "age" : 33 },
      { "id": 5 , "name" : "andrew5" , "age" : 34 },
    ];
  }



}
