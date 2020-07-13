
import { HttpClientService, User } from './../service/http-client.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provide-feedback',
  templateUrl: './provide-feedback.component.html',
  styleUrls: ['./provide-feedback.component.css']
})
export class ProvideFeedbackComponent implements OnInit {

  users: User[]= [];

  constructor(private httpService: HttpClientService) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(
      response => { this.users = response; }
    )
  }

  onProvideFeedbackClick(user){
    console.log("Provide Feedback button clicked.");
    alert("Provide Feedback Button Clicked..!  For "+user.id+" "+user.firstname);
  }

}
