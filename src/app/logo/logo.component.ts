import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  onLogo() {
    this.pageService.movePage({page: this.pageService.PAGES.main});
  }

}