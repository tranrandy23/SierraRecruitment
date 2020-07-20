import { Component, OnInit, ViewChild } from '@angular/core';
import { Candidate } from 'projects/mix/src/app/models/candidate';
import { CandidateDataService } from '../services/data/candidate-data.service';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  errorMessage: string = "";
  candidate: Candidate = new Candidate( );
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
      this._router.navigate(['/addcandidate'])
    },
      error => {console.log ("exception occured");
      this.msg  = 'error'
  }
    )}
    
   

deleteCandidate(id : number){
  this._service.deleteUserFromRemote(id).subscribe(
    data => {console.log ("response recieved");
    this._router.navigateByUrl('deletesuccess')
  },
    error => {console.log ("exception occured");
    this.msg  = 'error'

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