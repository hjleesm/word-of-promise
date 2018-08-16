import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AccountService } from '../../account.service';
import { Account } from '../../account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() logoVisible: boolean;
  account: Account;
  isAuth = false;
  onSession;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.onSession = this.accountService.onSession.subscribe(data => {
      if (data) {
        this.isAuth = true;
        this.account = this.accountService.getAccount();
      } else {
        this.isAuth = false;
        this.account = null;
      }
    });
  }

  ngOnDestroy() {
    this.onSession.unsubscribe();
  }

  onLoginBtn() {
    // this.pageService.movePage({page: this.pageService.PAGES.login});
  }

  onSignUpBtn() {
    // this.pageService.movePage({page: this.pageService.PAGES.signUp});
  }

  onLogoutBtn() {
    this.accountService.logout();
  }
}
