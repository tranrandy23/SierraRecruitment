import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrainingModuleComponent } from './training-module/training-module.component'
import { Routes, RouterModule } from '@angular/router';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ProvideFeedbackComponent } from './provide-feedback/provide-feedback.component';
import { ShowPerformanceComponent } from './show-performance/show-performance.component';
import { ViewPerformanceComponent } from './view-performance/view-performance.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'training-module', component: TrainingModuleComponent },
  { path: 'provide-feedback', component: ProvideFeedbackComponent },
  { path: 'add-feedback/:user', component: AddFeedbackComponent },
  { path: 'view-performance', component: ViewPerformanceComponent },
  { path: 'show-performance/:user', component: ShowPerformanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }