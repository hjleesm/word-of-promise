import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable()
export class AccountService {
  onCreate: EventEmitter<any> = new EventEmitter();
  onCheck: EventEmitter<any> = new EventEmitter();
  onLogin: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  create(id, password, email) {
    return this.http.post(API_URL + '/api/account/create', {
      id: id,
      password: password,
      email: email
    }).subscribe(data => {
      const body = data.json();
      if (body.result === 1) {
        this.onCreate.emit(true);
      } else {
        this.onCreate.emit(false);
      }
    });
  }

  checkId(id) {
    return this.http.get(API_URL + '/api/account/exist/' + id)
      .subscribe(data => {
        const body = data.json();
        this.onCheck.emit(body.exist);
      });
  }

  login(id, password) {
    this.http.post(API_URL + '/api/auth', {
      id: id,
      pw: password
    }).subscribe(data => {
      this.onLogin.emit(data.status === 200);
    }, error => {
      this.onLogin.emit(error.status === 200);
    });
  }

  logout() {
    this.http.delete(API_URL + '/api/auth')
      .subscribe(data => {
        console.log(data);
      });
  }

  checkSession() {
    this.http.get(API_URL + '/api/auth')
      .subscribe(data => {
        console.log(data);
      });
  }
}
