import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../page.service';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logoVisible: boolean;
  account: Account;
  isAuth = false;

  constructor(
    private pageService: PageService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.onSession.subscribe(data => {
      if (data) {
        this.isAuth = true;
        this.account = this.accountService.getAccount();
      } else {
        this.isAuth = false;
        this.account = null;
      }
    });
  }

  onLoginBtn() {
    this.pageService.movePage({page: this.pageService.PAGES.login});
  }

  onSignUpBtn() {
    this.pageService.movePage({page: this.pageService.PAGES.signUp});
  }

  onLogoutBtn() {
    this.accountService.logout();
  }
}
