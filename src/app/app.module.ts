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
<<<<<<< Updated upstream
=======
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { TrainingComponent } from './training/training.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    UserempComponent,
    LoginsuccessComponent,
    RegisterationComponent,
<<<<<<< Updated upstream
    RegisterSuccessComponent
=======
    RegisterSuccessComponent,
    HeaderComponent,
    FooterComponent,
    ContactListComponent,
    TrainingComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
<<<<<<< Updated upstream
    AppRoutingModule
=======
    AppRoutingModule,
    
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
