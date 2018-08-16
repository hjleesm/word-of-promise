import { Component, OnInit, Input } from '@angular/core';
import { SearchDataService } from '../../search-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchWord = '';
  @Input() isBig = true;

  constructor(
    private searchDataService: SearchDataService,
    private router: Router
  ) { }

  ngOnInit() {
    // if (this.pageService.getPage() === this.pageService.PAGES.result) {
    //   this.isBig = false;
    // }
  }

  onSearchBtn() {
    this.searchWord = this.searchWord.trim();
    if (this.searchWord === '') {
      return;
    }

    if (!this.isBig) {
      this.searchDataService.searchWords(this.searchWord);
    } else {
      this.router.navigate(['result', this.searchWord]);
      // this.pageService.movePage({
      //   page: this.pageService.PAGES.result,
      //   searchWord: this.searchWord
      // });
    }
    // this.pageService.onSearchBtn(this.searchWord);
  }

}
