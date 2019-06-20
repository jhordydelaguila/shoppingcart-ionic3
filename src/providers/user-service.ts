import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get('https://randomuser.me/api/?results=25')
      .map((resp) => {
        return resp['results'];
      })
      .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
