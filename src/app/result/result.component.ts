import { Component, OnInit, Input } from '@angular/core';
import { SearchDataService } from '../search-data.service';
import { Word } from '../word';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() searchWord = '';
  result = [];

  constructor(private searchDataService: SearchDataService) {
    const self = this;
    searchDataService.onSearch.subscribe(function(value) {
      self.result = [];
      const ret = value.json();

      for (const word of ret) {
        const tags = [];
        for (const tag of word.tag) {
          tags.push(tag);
        }

        self.result.push(new Word(
          word.book,
          word.chapter,
          word.verse,
          word.content,
          tags
        ));
      }
    });
  }

  ngOnInit() {
    this.searchDataService.searchResultByWord(this.searchWord);
  }
}
