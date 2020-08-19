import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegService } from '../reg.service';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-useremp',
  templateUrl: './useremp.component.html',
  styleUrls: ['./useremp.component.css']
})
export class UserempComponent implements OnInit {
   user = new User();
  msg = '';

  constructor(private _service : RegService, private _router : Router) { }

  ngOnInit() {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {console.log ("response recieved");
      this._router.navigate(['/addcandidate'])
    },
      error => {console.log ("exception occured");
    this.msg = 'Bad credentials, please enter valid emailId and password!'
  }
    )}
    gotoregisteration(){
      this._router.navigate(['/registeration'])

    }
}
