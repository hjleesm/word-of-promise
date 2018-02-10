import { Component } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mode: number;

  constructor(private pageService: PageService) {
    this.mode = pageService.getPage();

    pageService.onMovePage.subscribe( value => this.mode = value.page );
  }
}
