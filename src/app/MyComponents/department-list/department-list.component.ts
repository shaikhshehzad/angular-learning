import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <div class="Container">
    <h2>Department List </h2>
    <ul class=""items>
    <li (click)="onSelect(department)" *ngFor = "let department of departments">
    <span class="badge">{{department.id}}</span>{{department.name}}
    </li>
    </ul>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {


  departments = [
    {
      "id": 1,
      "name": "angular",
  },
  {
      "id": 2,
      "name": "Node",
  },
  {
      "id": 3,
      "name": "Mongodb",
  },
  {
    "id": 4,
    "name": "Ruby",
},
{
    "id": 5,
    "name": "Bootstrap",
}
  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onSelect(department: { id: any; })
  {
    this.router.navigate(['/departments', department.id]);

  }

}
