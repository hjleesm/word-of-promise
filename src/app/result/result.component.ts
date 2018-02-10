import { Component, OnInit, Input } from '@angular/core';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() searchWord = '';

  constructor(private searchDataService: SearchDataService) {
    searchDataService.onSearch.subscribe(function(value) {
      console.log(value);
    });
  }

  ngOnInit() {
    this.searchDataService.searchResultByWord(this.searchWord);
  }
}
