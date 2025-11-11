import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environment/environment';
import { JobServicesService } from '../services/job-services.service';
@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrl: './jobs-details.component.scss'
})
export class JobsDetailsComponent {

  jobDetails:any;
  suggestion:any[]=[];
  constructor(private jobService:JobServicesService,private params:ActivatedRoute){
   
  }

  ngOnInit(): void {
    this.readParams();
    console.log('hello');
  
  }

  readParams() {
    this.params.paramMap.subscribe({
      next: (res) => {
        const id = res.get('id'); // ✅ use .get('id') to retrieve the value
        console.log('ID:', id);
        this.getDetails(id); // pass the actual string ID
        this.jobService.getSuggestions(id).subscribe({
          next:(res)=>{
            console.log(res);
            this.suggestion=res;
          }
        })
      },
      error: (err) => {
        console.log('Error:', err);
      }
    });
  }
  
  readQueryParams(){
    this.params.queryParams.subscribe({
      next:(res)=>{
        console.log(res);
        const filter=res['filter'];
        const searchText=res['searchText'];
        // this.getDetails(filter,searchText);
      },error:(err)=>console.log(err)
    })
  }
  getDetails(filter:any){
    this.jobService.getJobDetails(filter).subscribe({
      next:(res)=>{
        console.log(res);
        this.jobDetails=res;
      },error:(err)=>{
        console.log(err)
      }
    })
  }
  getLinkType(link: string): 'email' | 'mobile' | 'url' {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
  
    if (emailRegex.test(link)) return 'email';
    if (mobileRegex.test(link)) return 'mobile';
    return 'url';
  }

  applyJob(link:any){
    window.open(link)
  }
}
