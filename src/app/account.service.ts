import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable()
export class AccountService {

  constructor(private http: Http) { }

  create(id, password, email) {
    return this.http.post(API_URL + '/api/account/create', {
      id: id,
      password: password,
      email: email
    });
  }
}
