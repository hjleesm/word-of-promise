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

  movePage(page: number) {
    this.onMovePage.emit({page: page});
  }

  getPage() {
    return this.page;
  }
}
