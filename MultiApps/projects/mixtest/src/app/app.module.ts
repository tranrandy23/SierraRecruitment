import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserempComponent } from './useremp/useremp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './useremp/loginsuccess/loginsuccess.component';
import { RegisterationComponent } from './useremp/registeration/registeration.component';
import { RegisterSuccessComponent } from './useremp/register-success/register-success.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { ContactListComponent } from './contact-list/contact-list.component';
import { TrainingComponent } from './training/training.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { AddcandidateComponent } from './candidate-form/addcandidate/addcandidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateUpdateComponent } from './candidate-list/candidate-update/candidate-update.component';
import { ProvideFeedbackComponent } from './candidate-form/addsuccess/provide-feedback/provide-feedback.component';
import { ViewPerformanceComponent } from './candidate-form/addsuccess/view-performance/view-performance.component';
import { TrainingModuleComponent } from './candidate-form/addsuccess/training-module/training-module.component';
import { AddFeedbackComponent } from './candidate-form/addsuccess/add-feedback/add-feedback.component';
import { ShowPerformanceComponent } from './candidate-form/addsuccess/show-performance/show-performance.component';


@NgModule({
  declarations: [
    AppComponent,
    UserempComponent,
    LoginsuccessComponent,
    RegisterationComponent,
    RegisterSuccessComponent,
    HeaderComponent,
    FooterComponent,
    TrainingComponent,
    CandidateFormComponent,
    AddcandidateComponent,
    CandidateListComponent,
    CandidateUpdateComponent,
    ProvideFeedbackComponent,
    ViewPerformanceComponent,
    TrainingModuleComponent,
    AddFeedbackComponent,
    ShowPerformanceComponent
   
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
