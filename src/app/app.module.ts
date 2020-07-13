import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProvideFeedbackComponent } from './provide-feedback/provide-feedback.component';
import { ViewPerformanceComponent } from './view-performance/view-performance.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainingModuleComponent } from './training-module/training-module.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProvideFeedbackComponent,
    ViewPerformanceComponent,
    TrainingModuleComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
