import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() isBig: boolean;

  constructor() { }

  ngOnInit() {
  }

  onLogo() {
    // this.pageService.movePage({page: this.pageService.PAGES.main});
  }

}
