import { Component } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  page: number;
  searchWord: string;

  constructor(private pageService: PageService) {
    this.page = pageService.getPage();

    const self = this;
    pageService.onMovePage.subscribe(function(value) {
      self.page = value.page;
      self.searchWord = value.searchWord;
    });
  }
}
