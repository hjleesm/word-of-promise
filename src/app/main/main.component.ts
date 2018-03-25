import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageService } from '../page.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  onSession;

  constructor(
    private pageService: PageService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.onSession = this.accountService.onSession.subscribe(data => {
      if (data) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.accountService.checkSession();
  }

  ngOnDestroy() {
    this.onSession.unsubscribe();
  }

  onEditBtn() {
    this.pageService.movePage({page: this.pageService.PAGES.edit});
  }
}
