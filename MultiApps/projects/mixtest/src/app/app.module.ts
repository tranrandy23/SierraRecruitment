import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { AddsuccessComponent } from './candidate-form/addsuccess/addsuccess.component';
import { AddcandidateComponent } from './candidate-form/addcandidate/addcandidate.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    AddsuccessComponent,
    AddcandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


