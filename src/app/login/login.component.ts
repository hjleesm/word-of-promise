import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../page.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() id;
  @Input() password;

  constructor(
    private pageService: PageService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.onLogin.subscribe(success => {
      if (success) {
        // TODO: Success login
      } else {
        // TODO: fail login
      }
    });
  }

  onLoginBtn() {
    this.accountService.login(this.id, this.password);
  }

  onCreate() {
    this.pageService.movePage({page: this.pageService.PAGES.signUp});
  }


}
