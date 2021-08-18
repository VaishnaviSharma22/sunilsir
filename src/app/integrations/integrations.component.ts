import { SelectOSComponent } from './../select-os/select-os.component';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router , RouterModule } from '@angular/router';
import { HttpHeaderResponse , HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { Injector , Injectable } from '@angular/core';
import { ApiInterceptor } from '../api.interceptor';
import { observable } from 'rxjs';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css'],

})
export class IntegrationsComponent implements OnInit {
  integrations: any = [];
  constructor( public apiService : ApiService , private router : Router ) {
    this.apiService.getIntegrations().subscribe(data => {
      console.log("data", data);
      this.integrations = data;
    })
    this.apiService.getdata().subscribe(data => {
      console.log("data", data);
      this.integrations = data;
    })
  }
    
  ngOnInit(): void {}
  Onclick(){
    this.router.navigate(['./SelectOSComponent']);
  }
   
}
