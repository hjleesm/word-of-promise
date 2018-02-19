import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() id = '';
  @Input() password = '';
  @Input() password_confirm = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.password.length < 8) {
      alert('The password must have at least 8 characters!');
      return;
    }

    if (this.password !== this.password_confirm) {
      alert('Confirm password and password do not match!');
      return;
    }
  }
}
