import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from './../service/http-client.service';

@Component({
  selector: 'app-view-performance',
  templateUrl: './view-performance.component.html',
  styleUrls: ['./view-performance.component.css']
})
export class ViewPerformanceComponent implements OnInit {

  users: User[]=[];

  constructor(private httpService: HttpClientService) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(
      response => { this.users = response; }
    )
  }

  onViewPerformanceClick(user){
    console.log("View Performance button clicked.");
    alert("Request to view Performance....Of "+user.id+" "+user.firstname);
  }

}
