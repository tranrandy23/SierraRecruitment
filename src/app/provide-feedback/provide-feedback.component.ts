
import { HttpClientService, User } from './../service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provide-feedback',
  templateUrl: './provide-feedback.component.html',
  styleUrls: ['./provide-feedback.component.css']
})
export class ProvideFeedbackComponent implements OnInit {

  users: User[] = [];

  constructor(private httpService: HttpClientService, private router: Router) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(
      response => { this.users = response; }
    )
  }

  onProvideFeedbackClick(user: User) {
    this.router.navigate(['/add-feedback', JSON.stringify(user)]); 
  }

  // onProvideFeedbackClick(user){
  //   console.log("Provide Feedback button clicked.");
  //   alert("Provide Feedback Button Clicked..!  For "+user.id+" "+user.firstname);
  // }
}
