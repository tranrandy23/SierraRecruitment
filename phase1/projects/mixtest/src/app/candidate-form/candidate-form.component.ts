import { Component, OnInit, ViewChild } from '@angular/core';

import { CandidateDataService } from '../services/data/candidate-data.service';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'
import { Candidate } from '../models/candidate';
import * as moment from 'moment';


@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  errorMessage: string = "";
  candidate = new Candidate();
  msg = '';
  id : number;
  @ViewChild('candidateform', { static: false }) userForm: NgForm;   
  constructor(private _service: CandidateDataService, private _router : Router,private route:ActivatedRoute) {
    
   }
  
  ngOnInit(){
    
  }

  addCandidate( ) {
    
    this._service.addUserFromRemote(this.candidate).subscribe(
      data => {console.log ("response recieved");
      this._router.navigate(['/addsuccess'])
    },
      error => {console.log ("exception occured");
      this.msg  = 'error'
  }
    )}
    
} 


