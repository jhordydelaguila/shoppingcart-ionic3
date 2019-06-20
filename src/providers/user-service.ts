import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
    //console.log('Hello UserService Provider');
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

}
