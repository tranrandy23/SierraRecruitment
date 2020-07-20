import { Component, OnInit } from '@angular/core';
import { Candidate } from 'projects/mix/src/app/models/candidate';
import {Router, ActivatedRoute} from '@angular/router';
import { CandidateDataService } from '../../services/data/candidate-data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {
  candidate = new Candidate();
  msg = '';
  id : number;
  candidate$: any;
  route: any;
candidates : Candidate[];
  constructor(private _service : CandidateDataService , private _router : Router,private router :
    ActivatedRoute) { }

  ngOnInit(){
    this.id = this.router.snapshot.params['id'];
    
    this._service.getEmployees().subscribe(
      response =>{this.candidates = response;}
     );

    this._service.getlistUserFromRemote(this.id).subscribe(
      data => {console.log ("response recieved");
      this.candidate = data;
    },
      error => {console.log ("exception occured");
      console.log(this.msg = 'Email already exist!');
  }
    )}

listCandidate(){
 
  this._service.getlistUserFromRemote(this.id).subscribe(
    data => {console.log ("response recieved");
    this._router.navigate(['/addcandidate'])
  },
    error => {console.log ("exception occured");
    console.log(this.msg = 'Email already exist!');
  }
  )}
  }