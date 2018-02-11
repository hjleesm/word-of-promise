import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  books;
  chapters: number[] = [];
  verse: number[] = [];
  word: Word = undefined;

  selectedBook: string;
  selectedChapter: string;
  selectedVerse: string;

  constructor(private searchDataService: SearchDataService) {
    const self = this;

    this.searchDataService.onSearch.subscribe(function(value) {
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

  ngOnInit() {
    this.books = Word.getBookList();
    this.selectedBook = this.books[0];
    this.selectedChapter = '1';
    this.selectedVerse = '1';

    this.updateChapter();
    this.updateVerse();
  }

  updateSelectedBook(changedBook: string): void {
    this.selectedBook = changedBook;
    this.selectedChapter = '1';
    this.selectedVerse = '1';

    this.updateChapter();
    this.updateVerse();
  }

  updateSelectedChapter(changedChapter: string): void {
    this.selectedChapter = changedChapter;

    this.updateVerse();
  }

  updateSelectedVerse(changedVerse: string): void {
    this.selectedVerse = changedVerse;

    this.searchDataService.search(this.books.indexOf(this.selectedBook) + 1, this.selectedChapter, this.selectedVerse);
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

  // TODO: 초기 로딩시 성경 말씀 가지고 오기.
  // TODO: book이나 chapter 변경시 변경된 말씀 가지고 오기.
}
