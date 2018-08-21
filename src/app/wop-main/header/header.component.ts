import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AccountService } from '../../account.service';
import { Account } from '../../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  account: Account;
  isAuth = false;
  onSession;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

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
    this.router.navigate(['login']);
  }

  onSignUpBtn() {
    this.router.navigate(['sign']);
  }

  onLogoutBtn() {
    this.accountService.logout();
  }
}
