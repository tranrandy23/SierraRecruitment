import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  registerUserFromRemote(user: User):Observable<any> {
    return this._http.post<any>("http://localhost:8084/register",user)
  }

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
   return this._http.post<any>("http://localhost:8084/login",user)
  }
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
}
