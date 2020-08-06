import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsuccessComponent } from './candidate-form/addsuccess/addsuccess.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { AddcandidateComponent } from './candidate-form/addcandidate/addcandidate.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


const routes: Routes = [ 
  { path: '', component:CandidateFormComponent },
  { path:'candidate-form', component:CandidateFormComponent},
  {path:'addsuccess',component:AddsuccessComponent},
  {path:'addcandidate',component:AddcandidateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
