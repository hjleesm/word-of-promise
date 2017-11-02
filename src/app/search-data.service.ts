import { Injectable } from '@angular/core';

@Injectable()
export class SearchDataService {

  constructor() { }

  onSearchBtn(searchWord:string) {
    console.log(searchWord + ' clicked!');
  }

}
