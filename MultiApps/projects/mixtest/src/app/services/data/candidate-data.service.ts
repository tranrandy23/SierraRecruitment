import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Candidate } from '../../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {
  candidate: Candidate;
  constructor(private _http : HttpClient) { }
  

  public addUserFromRemote(candidate :Candidate) :Observable<Candidate>{
    return this._http.post<any>("http://localhost:8087/create",candidate)
   }
    
   getlistUserFromRemote(id : number):Observable<any> {
    return this._http.get<Candidate[]>("http://localhost:8087/candidates/" + id)
  }
  getEmployees()
  {
    console.log("test call");
    return this._http.get<Candidate[]>("http://localhost:8087/candidates");
  }
  public deleteEmployee(candidate) {
    return this._http.delete<Candidate>("http://localhost:8087/candidates" + "/"+ candidate.id);
  }
 public updateCandidate(candidate :Candidate): Observable<Candidate> {
    return this._http.put<any>("http://localhost:8087/create",candidate);
  }
  setter(candidate : Candidate){
    this.candidate= candidate;
  }
  getter(){
    return this.candidate;
  }
}

