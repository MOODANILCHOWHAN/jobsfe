import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobServicesService {

  constructor(private http:HttpClient) { }

  getJobDetails(filter:any):Observable<any>{
    const api=`${environment.dominUrl}/${filter}`
    return this.http.get<any>(api)
  }

  getSuggestions(id:any){
    const api=`${environment.dominUrl}/${id}`;
    return this.http.get<any>(api);
  }
}
