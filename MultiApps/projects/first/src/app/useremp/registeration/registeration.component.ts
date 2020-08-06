import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../../user';
import {RegService}  from '../../reg.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})

export class RegisterationComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service : RegService, private _router : Router) { }

  ngOnInit() {
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {console.log ("response recieved");
      this._router.navigate(['/registerSuccess'])
    },
      error => {console.log ("exception occured");
      console.log(this.msg = 'Email already exist!');
  }
    )}
}
