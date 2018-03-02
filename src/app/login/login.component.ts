import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  onCreate() {
    this.pageService.movePage({page: this.pageService.PAGES.signUp});
  }


}
