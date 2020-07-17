import { Injectable } from '@angular/core';
import { Candidate } from 'projects/mixtest/src/app/models/candidate';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {
  listUserFromRemote(candidate: Candidate):Observable<any> {
    return this._http.post<any>("http://localhost:8087/candidates",candidate)
  }
  constructor(private _http : HttpClient) { }

  public addUserFromRemote(candidate :Candidate) :Observable<any>{
    return this._http.post<any>("http://localhost:8087/create",candidate)
   }
   public deleteUserFromRemote(candidate :Candidate) :Observable<any>{
    return this._http.post<any>("http://localhost:8087/candidates",candidate)
   }
}

