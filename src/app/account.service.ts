import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable()
export class AccountService {
  onCreate: EventEmitter<any> = new EventEmitter();
  onCheck: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  create(id, password, email) {
    return this.http.post(API_URL + '/api/account/create', {
      id: id,
      password: password,
      email: email
    }).subscribe(data => {
      const body = data.json();
      if (body.result === 1) {
        // TODO: Success!
      } else {
        // TODO: fail!
      }
    });
  }

  checkId(id) {
    return this.http.get(API_URL + '/api/account/exist/' + id)
      .subscribe(data => {
        const body = data.json();
        if (body.exist) {
          this.onCheck.emit(true);
        } else {
          this.onCheck.emit(false);
        }
      });
  }
}
