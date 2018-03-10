import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isAuth: boolean;

  constructor(
    private pageService: PageService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.onSession.subscribe(data => {
      if (data) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.accountService.checkSession();
  }

  onEditBtn() {
    this.pageService.movePage({page: this.pageService.PAGES.edit});
  }
}
