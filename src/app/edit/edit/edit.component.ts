import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Word } from '../../word';
import { SearchDataService } from '../../search-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  books;
  chapters: number[] = [];
  verse: number[] = [];
  word: Word = undefined;

  selectedBook: string;
  selectedChapter;
  selectedVerse;
  onSearch;

  constructor(
    private searchDataService: SearchDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    var b = this.route.snapshot.params.book || 0;
    var c = this.route.snapshot.params.chapter || 1;
    var v = this.route.snapshot.params.verse || 1;

    this.books = Word.getBookList();
    this.selectedBook = this.books[b];
    this.selectedChapter = c;
    this.selectedVerse = v;

    this.updateChapter();
    this.updateVerse();
    this.getWord();

    const self = this;

    this.onSearch = this.searchDataService.onSearch.subscribe(function(value) {
      const ret = value.json();

      for (const word of ret) {
        const tags = [];
        for (const tag of word.tag) {
          tags.push(tag);
        }

        self.word = new Word(
          +word.book,
          +word.chapter,
          +word.verse,
          word.content,
          tags
        );
      }
    });
  }

  ngOnDestroy() {
    this.onSearch.unsubscribe();
  }

  updateSelectedBook(changedBook: string): void {
    this.selectedBook = changedBook;
    this.selectedChapter = 1;
    this.selectedVerse = 1;

    this.updateChapter();
    this.updateVerse();
    this.getWord();
  }

  updateSelectedChapter(changedChapter: string): void {
    this.selectedChapter = changedChapter;
    this.selectedVerse = 1;

    this.updateVerse();
    this.getWord();
  }

  updateSelectedVerse(changedVerse: string): void {
    this.selectedVerse = changedVerse;
    this.getWord();
  }

  updateChapter() {
    this.chapters = [];

    const cLen = Word.getChapterLength(this.selectedBook);
    for (let i = 1; i <= cLen; i++) {
      this.chapters.push(i);
    }
  }

  updateVerse() {
    this.verse = [];

    const vLen = Word.getVerseLength(this.selectedBook, this.selectedChapter);
    for (let i = 1; i <= vLen; i++) {
      this.verse.push(i);
    }
  }

  getWord() {
    this.searchDataService.search(this.books.indexOf(this.selectedBook) + 1, this.selectedChapter, this.selectedVerse);
  }

  // TODO: 소스 정리 하기
}
