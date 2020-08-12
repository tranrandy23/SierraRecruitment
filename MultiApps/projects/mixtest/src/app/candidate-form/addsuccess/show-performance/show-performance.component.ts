import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../addsuccess/service/http-client.service'

@Component({
  selector: 'app-show-performance',
  templateUrl: './show-performance.component.html',
  styleUrls: ['./show-performance.component.css']
})

export class ShowPerformanceComponent implements OnInit {

  u: User;

  constructor(private activatedRoute: ActivatedRoute ) { 
    this.u = JSON.parse(activatedRoute.snapshot.params["user"]);
  }

  ngOnInit(): void {
  }

}