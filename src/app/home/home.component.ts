import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
    filter:any='';
    searchText:any='';
    jobs:any=[];
    constructor(private http:HttpClient,private route:Router)
    {
  
    }
    ngOnInit(): void {
    //  this.getJobs();
    }
    
    getJobs(){
      const api='https://jobs-ut20.onrender.com/getAllJobs/1'
      this.http.get<any>(api).subscribe({
        next:(res)=>{
          console.log(res);
          this.jobs=res?.jobs.slice(0,2);
        },error:(err)=>{
          console.error(err)
        }
      })
    }
    applyFilter(){
      this.route.navigate([''],{queryParams:{filter:this.filter,text:this.searchText}})
    }
    getDetails(element:any){
      this.route.navigate(['',element.id])
    }
    viewAll(cat:string){
      this.route.navigate(['',cat]);
    }
}
