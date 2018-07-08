import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Word } from '../word';
import { PageService } from '../page.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit, OnDestroy {
  @Input() word: Word;
  isAuth: boolean;
  onSession;

  constructor(
    private pageService: PageService,
    private accountService: AccountService
  ) { }

  ngOnInit() { 
    this.onSession = this.accountService.onSession.subscribe(data => {
      if (data) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.accountService.checkSession();
  }

  ngOnDestroy() {
    this.onSession.unsubscribe();
  }

  onEditBtn() {
    this.pageService.movePage({
      page: this.pageService.PAGES.edit,
      book: this.word.book - 1,
      chapter: this.word.chapter,
      verse: this.word.verse
    });
  }
}
