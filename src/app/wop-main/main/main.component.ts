import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  onSession;

  constructor(
    private accountService: AccountService,
    private router: Router
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
    this.router.navigate(['edit', 0, 1, 1]);
  }
}
