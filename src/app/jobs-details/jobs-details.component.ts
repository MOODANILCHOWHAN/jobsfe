import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrl: './jobs-details.component.scss'
})
export class JobsDetailsComponent {

  jobDetails:any;
  constructor(private http:HttpClient,private params:ActivatedRoute){
   
  }

  ngOnInit(): void {
    this.readParams();
    console.log('hello')
  }

  readParams() {
    this.params.paramMap.subscribe({
      next: (res) => {
        const id = res.get('id'); // ✅ use .get('id') to retrieve the value
        console.log('ID:', id);
        this.getDetails(id); // pass the actual string ID
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
    const api=`https://jobs-ut20.onrender.com/getJob/${filter}`
    this.http.get<any>(api).subscribe({
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
}
