import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable()
export class SearchDataService {
  onSearch: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  public searchResultByWord(searchWord) {
    return this.http.get(
      API_URL + '/api/words/' + searchWord
    ).subscribe(data => {
      this.onSearch.emit(data);
    });
  }
}
