import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchWord:string = '';

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit() {
  }

  onSearchBtn() {
    // TODO: emit to service
    this.searchDataService.onSearchBtn(this.searchWord);
  }

}
