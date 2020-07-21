import { Component, OnInit } from '@angular/core';
import { Candidate } from 'projects/mix/src/app/models/candidate';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import { CandidateDataService } from '../services/data/candidate-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
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
        
  }
    
deleteEmployee(candidate: Candidate): void {
  this._service.deleteEmployee(candidate)
    .subscribe( data => {
      this.candidates = this.candidates.filter(u => u !== candidate);
    })
};

list(){
  this._router.navigate(['/addcandidate']);
  }}