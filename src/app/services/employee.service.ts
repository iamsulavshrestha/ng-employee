import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const REST_API_SERVER = "http://localhost:3000/employees";
const REST_API_SERVER = "http://dummy.restapiexample.com/api/v1";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<any> {
    return this.httpClient.get(REST_API_SERVER + '/employees');
  }

  show(id): Observable<any> {
    return this.httpClient.get(`${REST_API_SERVER}/employee/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(REST_API_SERVER + '/create', data);
  }
  update(id, data): Observable<any> {
    return this.httpClient.put(`${REST_API_SERVER}/update/${id}`, data);
  }
  delete(id): Observable<any> {
    return this.httpClient.delete(`${REST_API_SERVER}/delete/${id}`); 
  }
}
