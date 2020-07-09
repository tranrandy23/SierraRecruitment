import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserempComponent } from './useremp/useremp.component';
import { LoginsuccessComponent } from './useremp/loginsuccess/loginsuccess.component';
import { RegisterationComponent} from './useremp/registeration/registeration.component';
import { RegisterSuccessComponent } from './useremp/register-success/register-success.component';
<<<<<<< Updated upstream
=======
import { TrainingComponent } from './training/training.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {path:'',component:UserempComponent},
  {path:'loginSuccess',component:LoginsuccessComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'useremp',component:UserempComponent},
<<<<<<< Updated upstream
  {path:'registerSuccess',component:RegisterSuccessComponent}
=======
  {path:'registerSuccess',component:RegisterSuccessComponent},
  {path:'training',component:TrainingComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< Updated upstream
  exports: [RouterModule]
=======
  exports: [RouterModule],
  
>>>>>>> Stashed changes
})
export class AppRoutingModule { }
