import { Injectable } from '@angular/core';
import { Candidate } from 'projects/mixtest/src/app/models/candidate';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {
  constructor(private _http : HttpClient) { }
  

  public addUserFromRemote(candidate :Candidate) :Observable<Candidate>{
    return this._http.post<any>("http://localhost:8087/create",candidate)
   }
   
   getlistUserFromRemote(id : number):Observable<any> {
    return this._http.get<any>("http://localhost:8087/candidates/${id}")
  }
  getEmployees()
  {
    console.log("test call");
    return this._http.get<Candidate[]>("http://localhost:8087/candidates");
  }
  public deleteEmployee(candidate) {
    return this._http.delete<Candidate>("http://localhost:8087/candidates" + "/"+ candidate.id);
  }
}

