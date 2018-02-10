import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchWord = '';

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  onSearchBtn() {
    // TODO: emit to service
    this.pageService.movePage(this.pageService.PAGES.result);
    // this.pageService.onSearchBtn(this.searchWord);
  }

}
