import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse , HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch' ;
// import 'rxjs/add/Observable/throw' ;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url : string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  // getEmployees(){
  //   return[
  //     { "id": 1 , "name" : "andrew" , "age" : 30 },
  //     { "id": 2 , "name" : "andrew2" , "age" : 31 },
  //     { "id": 3 , "name" : "andrew3" , "age" : 32 },
  //     { "id": 4 , "name" : "andrew4" , "age" : 33 },
  //     { "id": 5 , "name" : "andrew5" , "age" : 34 },
  //   ];
  // }
// replace this when you create web server successfullly
  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
                    // .catch(this.errorHandler);
  }
  // errorHandler(error : HttpErrorResponse){
  //   return Observable.throw(error.message || "server ")

  // }
}
