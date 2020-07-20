import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserempComponent } from './useremp/useremp.component';
import { FormsModule } from '@angular/forms';
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
import { AddsuccessComponent } from './candidate-form/addsuccess/addsuccess.component';
import { AddcandidateComponent } from './candidate-form/addcandidate/addcandidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserempComponent,
    LoginsuccessComponent,
    RegisterationComponent,
    RegisterSuccessComponent,
    HeaderComponent,
    FooterComponent,
   // ContactListComponent,
    TrainingComponent,
    CandidateFormComponent,
    AddsuccessComponent,
    AddcandidateComponent,
    CandidateListComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
