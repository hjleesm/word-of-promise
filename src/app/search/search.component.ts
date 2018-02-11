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

  constructor(
    private pageService: PageService,
    private searchDataService: SearchDataService
  ) { }

  ngOnInit() {
  }

  onSearchBtn() {
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
