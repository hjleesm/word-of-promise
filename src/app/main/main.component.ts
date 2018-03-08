import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private pageService: PageService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.checkSession();
  }

  onEditBtn() {
    this.pageService.movePage({page: this.pageService.PAGES.edit});
  }
}
