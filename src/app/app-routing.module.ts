import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserempComponent } from './useremp/useremp.component';
import { LoginsuccessComponent } from './useremp/loginsuccess/loginsuccess.component';
import { RegisterationComponent} from './useremp/registeration/registeration.component';
import { RegisterSuccessComponent } from './useremp/register-success/register-success.component';
import { TrainingComponent } from './training/training.component';



const routes: Routes = [
  {path:'',component:UserempComponent},
  {path:'loginSuccess',component:LoginsuccessComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'useremp',component:UserempComponent},
  {path:'registerSuccess',component:RegisterSuccessComponent},
  {path:'training',component:TrainingComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
