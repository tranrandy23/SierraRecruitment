import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CandidateDataService } from '../../services/data/candidate-data.service';
import { Observable } from 'rxjs';
import { Candidate } from '../../models/candidate';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addsuccess',
  templateUrl: './addsuccess.component.html',
  styleUrls: ['./addsuccess.component.css']
})
export class AddsuccessComponent implements OnInit {
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
    

}