import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  EMAIL_REGEXP = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  @Input() id = '';
  @Input() password = '';
  @Input() password_confirm = '';
  @Input() email = '';

  checkedId = false;
  isSubmitted = false;

  constructor(
    private accountService: AccountService,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.onCheckId();
    this.onCreate();
  }

  onSubmit() {
    if (this.isSubmitted) {
      alert('This account already is submitted!');
      return;
    }

    if (this.id.length < 3) {
      alert('The id must have at least 3 characters!');
      return;
    }

    if (!this.checkedId) {
      alert('You must check id.');
      return;
    }

    if (this.password.length < 8) {
      alert('The password must have at least 8 characters!');
      return;
    }

    if (this.password !== this.password_confirm) {
      alert('Confirm password and password do not match!');
      return;
    }

    if (!this.EMAIL_REGEXP.test(this.email)) {
      alert('Invalid email address!');
      return;
    }

    this.accountService.create(this.id, this.password, this.email);
    this.isSubmitted = true;
  }

  onCheckIdBtn() {
    if (this.id.length < 3) {
      alert('The id must have at least 3 characters!');
      return;
    }

    this.accountService.checkId(this.id);
  }

  onCheckId() {
    this.accountService.onCheck.subscribe(result => {
      if (result) {
        alert('Id already in use by another user.');
        this.checkedId = false;
      } else {
        alert('This id is available!');
        this.checkedId = true;
      }
    });
  }

  onCreate() {
    this.accountService.onCreate.subscribe(result => {
      if (result) {
        alert('Success!\nYou\'ve joined WOP.');
        this.pageService.movePage({page: this.pageService.PAGES.login});
      } else {
        alert('Sign up failed!');
        this.isSubmitted = false;
      }
    });
  }

}
