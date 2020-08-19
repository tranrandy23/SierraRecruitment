import { HttpClientService, User } from './../service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-performance',
  templateUrl: './view-performance.component.html',
  styleUrls: ['./view-performance.component.css']
})
export class ViewPerformanceComponent implements OnInit {

  users: User[] ;

  constructor(private httpService: HttpClientService, private router: Router) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(
      response => { this.users = response; }
    )
  }

  onViewPerformanceClick(user: User) {
    this.router.navigate(['/show-performance', JSON.stringify(user)]);
  }

  // onViewPerformanceClick(user){
  //   console.log("View Performance button clicked.");
  //   alert("Request to view Performance....Of "+user.id+" "+user.firstname);
  // }
}

