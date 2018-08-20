import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SearchDataService } from '../../search-data.service';
import { Word } from '../../word';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {
  @Input() searchWord = '';
  result = [];
  onSearch;
  onChangeSearchWord;

  constructor(
    private searchDataService: SearchDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchWord = this.route.snapshot.params.searchWord;
    const type = this.route.snapshot.params.type;

    const self = this;
    this.onSearch = this.searchDataService.onSearch.subscribe(function(value) {
      self.result = [];
      const ret = value.json();

      for (const word of ret) {
        const tags = [];
        for (const tag of word.tag) {
          tags.push(tag);
        }

        self.result.push(new Word(
          +word.book,
          +word.chapter,
          +word.verse,
          word.content,
          tags
        ));
      }
    });

    this.onChangeSearchWord = this.searchDataService.onChangeSearchWord.subscribe(function(value) {
      self.searchWord = value;
    });

    if (type === 'word') {
      this.searchDataService.searchWords(this.searchWord);
    } else {
      this.searchDataService.searchByTag(this.searchWord);
    }
  }

  ngOnDestroy() {
    this.onSearch.unsubscribe();
    this.onChangeSearchWord.unsubscribe();
  }
}
