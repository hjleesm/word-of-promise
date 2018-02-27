import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() id;
  @Input() password;

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  onLogin() {

  }

  onCreate() {
    this.pageService.movePage({page: this.pageService.PAGES.signUp});
  }


}
