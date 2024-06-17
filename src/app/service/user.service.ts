import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly serverUrl: string = 'http://localhost:2006/employee';

  constructor(private http: HttpClient){}

  getAllEmployees(keyword:string,pageNo:number,pageSize:number,sortBy:string,sortDir:string): Observable<any>{

    return this.http.get(`${this.serverUrl}/getAllEmployees?keyword=${keyword}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`);
      
  }

}
