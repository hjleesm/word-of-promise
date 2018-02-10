import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PageService {
  PAGES = {
    main: 0,
    result: 1,
    edit: 2
  };
  private page = this.PAGES.main;

  onMovePage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  movePage(value) {
    if (this.page !== value.page) {
      this.onMovePage.emit(value);
      this.page = value.page;
    }
  }

  getPage() {
    return this.page;
  }
}
