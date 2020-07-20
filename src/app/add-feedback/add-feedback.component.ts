import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../service/http-client.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  u: User;

  constructor(private activatedRoute: ActivatedRoute ) {
    this.u = JSON.parse(activatedRoute.snapshot.params["user"])
   }

  ngOnInit(): void {
  }

}
