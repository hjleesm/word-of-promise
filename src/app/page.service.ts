import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PageService {
  PAGES = {
    main: 0,
    result: 1,
    edit: 2,
    login: 3,
    signUp: 4
  };
  private page = this.PAGES.main;

  onMovePage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public movePage(value) {
    if (this.page !== value.page) {
      this.onMovePage.emit(value);
      this.page = value.page;
    }
  }

  public getPage() {
    return this.page;
  }
}
