import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'https://localhost:44371';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    const url = `${this.REST_API_SERVER + '/api/Users'}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public register(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER + '/api/Account/register'}`;
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }
}
