import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AccountService } from '../../account.service';
import { Router } from '@angular/router';

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
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onLogin = this.accountService.onLogin.subscribe(success => {
      if (success) {
        this.router.navigate(['/']);
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
    this.router.navigate(['sign']);
  }


}
