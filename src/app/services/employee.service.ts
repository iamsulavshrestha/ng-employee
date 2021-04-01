import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const REST_API_SERVER = "http://localhost:3000/employees";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<any> {
    return this.httpClient.get(REST_API_SERVER+'/');
  }

  show(id): Observable<any> {
    return this.httpClient.get(`${REST_API_SERVER}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(REST_API_SERVER, data);
  }
  update(id, data): Observable<any> {
    return this.httpClient.put(`${REST_API_SERVER}/${id}`, data);
  }
  delete(id): Observable<any> {
    return this.httpClient.delete(`${REST_API_SERVER}/${id}`);
  }
}
