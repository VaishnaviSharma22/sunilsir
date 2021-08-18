import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "../assets/sampleResponse.json";
  url="api/v1/get-instrucations"
  constructor(private httpClient: HttpClient) { }

  getIntegrations() {
    return this.httpClient.get(  this.apiUrl)
}
  getdata(){
    debugger
    return this.httpClient.get(environment.serviceUrl + this.url);
  }
}
