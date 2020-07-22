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
        
  }
    
deleteEmployee(candidate: Candidate): void {
  this._service.deleteEmployee(candidate)
    .subscribe( data => {
      this.candidates = this.candidates.filter(u => u !== candidate);
    })
};


details( ) {
    
  this._service.getEmployees().subscribe(
    data => {console.log ("response recieved");
    this._router.navigate(['/candidate-list'])
  },
    error => {console.log ("exception occured");
    this.msg  = 'error'
}
  )}
  }