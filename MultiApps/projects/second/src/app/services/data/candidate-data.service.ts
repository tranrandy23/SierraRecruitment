import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {

  constructor() { }

  executeHelloWorld() {
    console.log("hello world from the service!");
  }
}
