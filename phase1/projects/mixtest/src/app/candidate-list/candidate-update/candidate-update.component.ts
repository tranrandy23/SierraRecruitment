import { Component, OnInit, ViewChild } from '@angular/core';


import {NgForm, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'
import { Candidate } from '../../models/candidate';
import { CandidateDataService } from '../../services/data/candidate-data.service';


@Component({
  selector: 'app-candidate-update',
  templateUrl: './candidate-update.component.html',
  styleUrls: ['./candidate-update.component.css']
})
export class CandidateUpdateComponent implements OnInit {

  
  candidate : Candidate;
  msg = '';
  id : number;
  @ViewChild('candidateform', { static: false }) userForm: NgForm;   
  candidateupdate: null;
  candidates : Candidate[];
  message: string;

  constructor(private _service: CandidateDataService, private _router : Router,private route:ActivatedRoute) {
    
   }
  
  ngOnInit(){

    this.candidate = this._service.getter();}
 
  updateCandidate() {
      this._service.updateCandidate(this.candidate)
      .subscribe(data => {console.log ("response recieved");
      alert('The candidate was updated successfully!');
      this._router.navigate(['/addcandidate'])
       
        },
      error => {
        console.log(error);
      });
  }
  
    onSubmit() {
      this.updateCandidate();   
    }
  
    gotoList() {
      this._router.navigate(['/addcandidate']);
    }
    
}
