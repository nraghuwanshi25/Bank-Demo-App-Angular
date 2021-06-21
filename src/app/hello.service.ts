import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  baseURL: string = "http://localhost:9000";
 
  constructor(private http: HttpClient) {
  }
 
  getRes():  Observable<any> {

    return this.http.get(this.baseURL+'/hello',{ headers, responseType: 'text'});
  }


}
