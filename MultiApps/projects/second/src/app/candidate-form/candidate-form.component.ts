import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate';
import { CandidateDataService } from '../services/data/candidate-data.service';
@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  errorMessage: string = "";
  candidate: Candidate = new Candidate();
  
  constructor(private service: CandidateDataService) {
    
   }

  ngOnInit(): void {

  }

  addCandidate(): void {
    console.log("addCandidate called");
    this.service.executeHelloWorld();

  }


}
