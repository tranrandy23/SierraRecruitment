import { Component, OnInit } from '@angular/core';
import { Candidate } from 'projects/mixtest/src/app/models/candidate';
import { CandidateDataService } from '../services/data/candidate-data.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  errorMessage: string = "";
  candidate: Candidate = new Candidate();
  msg = '';
  
  constructor(private _service: CandidateDataService, private _router : Router) {
    
   }

  ngOnInit(){

  }

  addCandidate() {
    this._service.addUserFromRemote(this.candidate).subscribe(
      data => {console.log ("response recieved");
      this._router.navigateByUrl('addsuccess')
    },
      error => {console.log ("exception occured");
      this.msg  = 'error'
  }
    )}
    
   

deleteCandidate() {
  this._service.deleteUserFromRemote(this.candidate).subscribe(
    data => {console.log ("response recieved");
    this._router.navigateByUrl('deletesuccess')
  },
    error => {console.log ("exception occured");
    this.msg  = 'error'

}
)}

listCandidate(){
  this._router.navigate(['/addcandidate'])

}}

