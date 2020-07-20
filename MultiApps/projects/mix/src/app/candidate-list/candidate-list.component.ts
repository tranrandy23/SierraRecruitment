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
  id : number
  candidates: Observable<Candidate[]>;

  constructor( private _service: CandidateDataService,private _router : Router,private router :
    ActivatedRoute) { }

  ngOnInit() {
    
    this.reloadData();
    
   


  }  
  
  reloadData() {
    this.candidates = this._service.listUserFromRemote();
  }
  
   
   

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
 
this._service.listUserFromRemote().subscribe(
  data => {console.log ("response recieved");
  this._router.navigate(['/candidate-form'])
},
  error => {console.log ("exception occured");
  console.log(this.msg = 'Email already exist!');
}
)}
employeeDetails(id: number){
  this._router.navigate(['candidate-list', id]);
}
}
