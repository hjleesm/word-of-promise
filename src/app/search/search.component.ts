import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../page.service';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchWord = '';
  isBig = true;

  constructor(
    private pageService: PageService,
    private searchDataService: SearchDataService
  ) { }

  ngOnInit() {
    if (this.pageService.getPage() === this.pageService.PAGES.result) {
      this.isBig = false;
    }
  }

  onSearchBtn() {
    this.searchWord = this.searchWord.trim();
    if (this.searchWord === '') {
      return;
    }

    if (this.pageService.getPage() === this.pageService.PAGES.result) {
      this.searchDataService.searchByTag(this.searchWord);
    } else {
      this.pageService.movePage({
        page: this.pageService.PAGES.result,
        searchWord: this.searchWord
      });
    }
    // this.pageService.onSearchBtn(this.searchWord);
  }

}
