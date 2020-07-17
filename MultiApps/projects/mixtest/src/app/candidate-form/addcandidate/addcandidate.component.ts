import { Component, OnInit } from '@angular/core';
import { Candidate } from 'projects/mixtest/src/app/models/candidate';
import {Router} from '@angular/router';
import { CandidateDataService } from '../../services/data/candidate-data.service';


@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {
  candidate = new Candidate();
  msg = '';

  constructor(private _service : CandidateDataService , private _router : Router) { }

  ngOnInit(){

  }

  registerUser(){
    this._service.listUserFromRemote(this.candidate).subscribe(
      data => {console.log ("response recieved");
      this._router.navigate(['/addsuccess'])
    },
      error => {console.log ("exception occured");
      console.log(this.msg = 'Email already exist!');
  }
    )}
}
