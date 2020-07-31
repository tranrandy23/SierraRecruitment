import { Component, OnInit, Input  } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import { CandidateDataService } from '../services/data/candidate-data.service';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
 
  msg = '';
  id : number;
  
  candidate: Candidate;
  candidates : Candidate[];

  constructor(private service : CandidateDataService ,private router: Router, private _router : Router,private rout :
    ActivatedRoute) { }

  ngOnInit(){
   
    this.candidate = this.service.getter();
    
    
   

    this.service.getlistUserFromRemote(this.id)
      .subscribe(data => {
        console.log(data)
        this.candidate= data;
      }, error => console.log(error));
  }
    


list(){
  this._router.navigate(['/addcandidate']);
  }}