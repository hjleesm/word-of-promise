import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../page.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logoVisible: boolean;
  isAuth = false;

  constructor(
    private pageService: PageService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.onSession.subscribe(data => {
      if (data === "Unauthorized") {
        this.isAuth = false;
      } else {
        this.isAuth = true;
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
