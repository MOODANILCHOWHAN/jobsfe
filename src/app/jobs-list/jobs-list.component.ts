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
  industryType:any;
  location:any;
  totalJobs:number=0;
  jobName:any;company:any;remote:any;
  routeSubscription:Subscription | undefined;
  constructor(private http:HttpClient, private readonly router:Router,
              private routerPa:ActivatedRoute){
             
  }

  ngOnInit(): void {
   this.setingQueryParams();
  }

  setingQueryParams(){

    this.routeSubscription=  this.routerPa.queryParamMap.subscribe(res=>{
      console.log(res);
      const pageParam=res;

      const qParams={
       page:pageParam.get('page')?pageParam.get('page'):1,
       company:pageParam.get('company')?pageParam.get('company'):'',
      location:pageParam.get('location')?pageParam.get('location'):'',
      jobName:pageParam.get('job')?pageParam.get('job'):'',
       industryType:pageParam.get('industryType')?pageParam.get('industryType'):'',
      }
      this.getJobs(qParams);
    })
  }
  ngOnDestroy(): void {
    if(this.routeSubscription){
      this.routeSubscription.unsubscribe();
    }
  }
  getJobs(page:any){
    const url=`https://jobs-ut20.onrender.com/getAllJobs`;
    console.log(url)
    this.http.get<any>(url,{ params: page }).subscribe({
      next:(res)=>{
        console.log(res)
        this.jobList=res?.jobs;
        this.page=res?.currentPage;
        this.totalJobs=res?.totalJobs        
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
