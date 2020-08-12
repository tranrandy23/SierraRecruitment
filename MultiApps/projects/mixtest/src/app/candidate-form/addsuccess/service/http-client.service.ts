import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class User{
  public id: number;
  public firstName: string;
  public lastName: string;

  constructor(id: number, firstName: string, lastName: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
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