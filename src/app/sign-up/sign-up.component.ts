import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';

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

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.id.length < 3) {
      alert('The id must have at least 3 characters!');
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

    this.accountService.create(this.id, this.password);
  }
}
