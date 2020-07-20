import { Injectable } from '@angular/core';
import { Candidate } from 'projects/mixtest/src/app/models/candidate';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {
  constructor(private _http : HttpClient) { }
  
  listUserFromRemote():Observable<any> {
    return this._http.get<any>("http://localhost:8087/candidates")
  }
 

  public addUserFromRemote(candidate :Candidate) :Observable<Candidate>{
    return this._http.post<any>("http://localhost:8087/create",candidate)
   }
   public deleteUserFromRemote(id : number) :Observable<any>{
    return this._http.delete<any>("http://localhost:8087/candidates/${id}" )
   }
   getlistUserFromRemote(id : number):Observable<any> {
    return this._http.get<any>("http://localhost:8087/candidates/${id}")
  }
  getEmployees()
  {
    console.log("test call");
    return this._http.get<Candidate[]>("http://localhost:8087/candidates");
  }
}

