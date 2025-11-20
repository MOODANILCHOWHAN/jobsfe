import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addJobs(data:any):Observable<any>{
    const api=`${environment.dominUrl}createJob`
    return this.http.post(api,data)
  }
}
