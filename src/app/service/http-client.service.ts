import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class User{
  public id: number;
  public firstname: string;
  public lastname: string;

  constructor(id: number, firstname: string, lastname: string){
    this.id=id;
    this.firstname=firstname;
    this.lastname=lastname;
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpclient: HttpClient) { }

  getUsers(){
    console.log("Practice Service");
    return this.httpclient.get<User[]>('http://localhost:8081/userlist');
  }
}
