import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserempComponent } from './useremp/useremp.component';
import { LoginsuccessComponent } from './useremp/loginsuccess/loginsuccess.component';
import { RegisterationComponent} from './useremp/registeration/registeration.component';
import { RegisterSuccessComponent } from './useremp/register-success/register-success.component';
import { TrainingComponent } from './training/training.component';
import { ViewModuleComponent } from './view-module/view-module.component';



const routes: Routes = [
  {path:'',component:ViewModuleComponent},
  {path:'loginSuccess',component:LoginsuccessComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'useremp',component:UserempComponent},
  {path:'viewModule',component:ViewModuleComponent},
  {path:'registerSuccess',component:RegisterSuccessComponent},
  {path:'training',component:TrainingComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
