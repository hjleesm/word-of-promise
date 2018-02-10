import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchDataService {

  onSearch: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onSearchBtn(searchWord: string) {
    console.log(searchWord + ' clicked!');
    this.onSearch.emit({});
  }

}
