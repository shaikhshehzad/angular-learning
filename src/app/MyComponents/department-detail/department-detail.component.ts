import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
// import { parse } from 'path';
@Component({
  selector: 'app-department-detail',
  template: `

    <h1>
      department-detail works!!!!!!!!!!!!!!!!
    you selected department with id 
    {{departmentId}}
  <router-outlet></router-outlet>

<p>

<button (click)="showoverview()">Overview</button>
<button (click)="showcontact()">Contact</button>

</p>
<button (click)="goPrevious()">Previous</button>
<br>
<button (click)="goNext()">Next</button>
<button (click)="gotodepartments()">Back</button>



    
    </h1>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any | null ;
  constructor(private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.departmentId = id;

    // this.route.paramMap.subscribe((params : ParamMap)=>{
    //   let id = parseInt(params.get('Id') as any);
    //   this.departmentId = id;
    // });
  }

  goPrevious(){
    console.log(this.departmentId)
    
    let prevId = this.departmentId - 1 ;
    this.router.navigate(['/departments' , prevId]);
    this.ngOnInit()


  }
  goNext(){
    console.log(this.departmentId)
    let nextId = this.departmentId + 1 ;
    this.router.navigate(['/departments' , nextId]);
    this.ngOnInit()
  }
  gotodepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id : selectedId}])
  }
  showcontact(){
    this.router.navigate(['contact'], {relativeTo : this.route} )


  }
  showoverview()
  {
    this.router.navigate(['overview'], {relativeTo : this.route} )
  }

}
