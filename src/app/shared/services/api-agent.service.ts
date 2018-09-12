import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiAgentService {
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  

  postData(post_data, endpoint) {
    const url = environment.API_ROOT + endpoint;

    return this.http.post(url, post_data).toPromise();
  }

  getData(endpoint) {
    const url = environment.API_ROOT + endpoint;
    return this.http.get(url).toPromise();
  }
}
