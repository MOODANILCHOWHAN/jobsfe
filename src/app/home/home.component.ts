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
    jobs:any=[];
    loading:boolean=false;
    constructor(private http:HttpClient,private route:Router)
    {
  
    }
    ngOnInit(): void {
     this.getJobs();
    }
    
    getJobs(){
      this.loading=true;
      const itJobs=this.http.get<any>(`${environment.dominUrl}getAllJobs/1`);
      const nonITJobs=this.http.get<any>(`${environment.dominUrl}getAllJobs/1`);
      const retail=this.http.get<any>(`${environment.dominUrl}getAllJobs/1`);
      forkJoin([
        itJobs.pipe(catchError(err=>of({error:true,details:err,api:'it'}))),
        nonITJobs.pipe(catchError(err=>of({error:true,details:err,api:'nonIt'}))),
        retail.pipe(catchError(err=>of({error:true,details:err,api:'retail'})))
      ]).subscribe({
       next:(res)=>{
        this.loading=false;
        console.log(res);
       },error:(err)=>{
        console.log(err);
       }
      })
    }
    
    getDetails(element:any){
      this.route.navigate(['',element.id])
    }
    viewAll(cat:string){
      this.route.navigate(['jobsList'],{queryParams:{category:cat}});
    }
}
