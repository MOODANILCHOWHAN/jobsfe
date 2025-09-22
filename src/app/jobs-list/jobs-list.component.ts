import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent implements OnInit,OnDestroy {
  jobList:any[]=[];
  page:any;
  routeSubscription:Subscription | undefined;
  constructor(private http:HttpClient, private readonly router:Router,
              private routerPa:ActivatedRoute){
             
  }

  ngOnInit(): void {
   
    this.routeSubscription=  this.routerPa.queryParamMap.subscribe(res=>{
      console.log(res);
      const pageParam=res.get('page');
      this.page=pageParam?pageParam:1;
      this.getJobs(this.page);
    })
  }

  ngOnDestroy(): void {
    if(this.routeSubscription){
      this.routeSubscription.unsubscribe();
    }
  }
  getJobs(page:number){
    this.page=page;
    const url=`https://jobs-ut20.onrender.com/getAllJobs/${this.page}`;
    this.http.get<any>(url).subscribe({
      next:(res)=>{
        console.log(res)
        this.jobList=res;
      }
    })
  }
  onPageChange(event:any){
    // console.log(event);
    this.router.navigate([],{
      relativeTo:this.routerPa,
      queryParams:{page:event},
      queryParamsHandling:'merge'
    })
    // this.getJobs(this.page)
  }
  navToDescription(job:any){
    console.log(job)
    this.router.navigate(['jobdetails', job._id]);

  }
}
