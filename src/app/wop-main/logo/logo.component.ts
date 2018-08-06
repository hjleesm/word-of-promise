import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() isBig: boolean;

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  onLogo() {
    this.pageService.movePage({page: this.pageService.PAGES.main});
  }

}
