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
<<<<<<< Updated upstream
import { ContactListComponent } from './contact-list/contact-list.component';
=======
//import { ContactListComponent } from './contact-list/contact-list.component';
>>>>>>> Stashed changes
import { TrainingComponent } from './training/training.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserempComponent,
    LoginsuccessComponent,
    RegisterationComponent,
    RegisterSuccessComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< Updated upstream
    ContactListComponent,
    TrainingComponent,
    
=======
   // ContactListComponent,
    TrainingComponent,

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
<<<<<<< Updated upstream
   
    
=======


>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
