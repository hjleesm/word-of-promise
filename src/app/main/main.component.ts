import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  onEditBtn() {
    this.pageService.movePage({page: this.pageService.PAGES.edit});
  }

}
