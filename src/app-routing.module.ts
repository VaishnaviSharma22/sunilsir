import { SelectOSComponent } from './app/select-os/select-os.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { FileSharingComponent } from './app/file-sharing/file-sharing.component';
import { IntegrationsComponent } from './app/integrations/integrations.component';
import { SecretsComponent } from './app/secrets/secrets.component';
import { DownloadComponent } from './app/download/download.component';
import { SaveComponent } from './app/save/save.component';
import { LCcmdComponent } from './app/lccmd/lccmd.component';
import { ApproveComponent } from './app/approve/approve.component';
import { ChangeComponent } from './app/change/change.component';
import { KeyComponent } from './app/key/key.component';
import { FinishComponent } from './app/finish/finish.component';

const routes: Routes = [

    {path: 'dashboard' , component: DashboardComponent},
    {path: 'integrations', component: IntegrationsComponent},
    {path: 'filesharing', component: FileSharingComponent},
    {path: 'secrets' , component: SecretsComponent},
    {path:'SelectOSComponent', component: SelectOSComponent },
    {path:'DownloadComponent', component:DownloadComponent},
    {path:'SaveComponent', component:SaveComponent},
    {path:'LCcmdComponent' , component:LCcmdComponent},
    {path:'ApproveComponent', component:ApproveComponent},
    {path:'ChangeComponent' , component:ChangeComponent},
    {path:'KeyComponent', component:KeyComponent},
    {path:'FinishComponent', component:FinishComponent},
    {path: '' , redirectTo: 'dashboard', pathMatch: 'full'},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
