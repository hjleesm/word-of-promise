import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Input() id;
  @Input() password;
  onLogin;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.onLogin = this.accountService.onLogin.subscribe(success => {
      if (success) {
        // this.pageService.movePage({page: this.pageService.PAGES.main});
      } else {
        alert('login failed!\n' + 'Invaild ID/Password');
      }
    });
  }

  ngOnDestroy() {
    this.onLogin.unsubscribe();
  }

  onLoginBtn() {
    this.accountService.login(this.id, this.password);
  }

  onCreate() {
    // this.pageService.movePage({page: this.pageService.PAGES.signUp});
  }


}
