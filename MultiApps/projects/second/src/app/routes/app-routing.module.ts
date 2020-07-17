import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateFormComponent } from '../candidate-form/candidate-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-candidate', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
