import { AppComponent } from './app.component';
import { ProvideFeedbackComponent } from './provide-feedback/provide-feedback.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';


const routes: Routes = [
  { path: "add-feedback/:user", component: AddFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
