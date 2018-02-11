import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable()
export class SearchDataService {
  onSearch: EventEmitter<any> = new EventEmitter();
  onChangeSearchWord: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  public searchByTag(searchWord) {
    return this.http.get(
      API_URL + '/api/words/' + searchWord
    ).subscribe(data => {
      this.onSearch.emit(data);
      this.onChangeSearchWord.emit(searchWord);
    });
  }

  public search(book, chapter, verse) {
    if (book < 10) {
      book = '0' + book;
    }

    return this.http.get(
      API_URL + '/api/bibles/' + book + '/' + chapter + '/' + verse
    ).subscribe(data => {
      this.onSearch.emit(data);
    });
  }
}
