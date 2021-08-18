import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { FileSharingComponent } from './file-sharing/file-sharing.component';
import { SecretsComponent } from './secrets/secrets.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SelectOSComponent } from './select-os/select-os.component';
import { DownloadComponent } from './download/download.component';
import { SaveComponent } from './save/save.component';
import { LCcmdComponent } from './lccmd/lccmd.component';
import { ApproveComponent } from './approve/approve.component';
import { ChangeComponent } from './change/change.component';
import { KeyComponent } from './key/key.component';
import { FinishComponent } from './finish/finish.component';
export { HttpHeaderResponse } from '@angular/common/http';
import { Injector, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ApiInterceptor } from './api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IntegrationsComponent,
    FileSharingComponent,
    SecretsComponent,
    SelectOSComponent,
    DownloadComponent,
    SaveComponent,
    LCcmdComponent,
    ApproveComponent,
    ChangeComponent,
    KeyComponent,
    FinishComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [HttpClientModule, ApiService,{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }]
  , bootstrap: [AppComponent,]
})
export class AppModule { }


