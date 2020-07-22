import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { CandidateDataService } from '../services/data/candidate-data.service';



@Component({
  selector: 'app-view-module',
  templateUrl: './view-module.component.html',
  styleUrls: ['./view-module.component.css']
})
export class ViewModuleComponent implements OnInit {

  constructor(private _service : CandidateDataService, private _router : Router) { }

  ngOnInit() {
  }

  addCandidate(){
    this._router.navigate(['/candidate-form']);
  }

  viewCandidate()
  {
    this._router.navigate(['/viewCandidate']);
  }

}
