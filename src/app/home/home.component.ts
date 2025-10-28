import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, forkJoin, of } from 'rxjs';
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
    filter:any='';
    searchText:any='';
    itJobs:any=[];
    nonItJobs:any=[];
    retailJobs:any=[];
    loading:boolean=false;
    constructor(private http:HttpClient,private route:Router)
    {
  
    }
    ngOnInit(): void {
     this.getJobs();
    }
    
    getJobs(){
      this.loading=true;
      const itJobs=this.http.get<any>(`${environment.dominUrl}getJobByInd/it`);
      const nonITJobs=this.http.get<any>(`${environment.dominUrl}getJobByInd/nonit`);
      const retail=this.http.get<any>(`${environment.dominUrl}getJobByInd/retail`);
      forkJoin([
        itJobs.pipe(catchError(err=>of({error:true,details:err,api:'it'}))),
        nonITJobs.pipe(catchError(err=>of({error:true,details:err,api:'nonIt'}))),
        retail.pipe(catchError(err=>of({error:true,details:err,api:'retail'})))
      ]).subscribe({
       next:(res)=>{
        this.loading=false;
        console.log(res);
        this.itJobs=res[0].jobs;
        this.nonItJobs=res[1].jobs;
        this.retailJobs=res[2].jobs;
       },error:(err)=>{
        console.log(err);
       }
      })
    }
    
    getDetails(element:any){
      this.route.navigate(['',element.id])
    }
    viewAll(cat:string){
      this.route.navigate(['jobsList'],{queryParams:{industryType:cat}});
    }
}
