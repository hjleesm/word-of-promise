import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Word } from '../../word';
import { AccountService } from '../../account.service';
import { Router } from '@angular/router';

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
    private accountService: AccountService,
    private router: Router
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
    this.router.navigate(['edit', this.word.book - 1, this.word.chapter, this.word.verse]);
    // this.pageService.movePage({
    //   page: this.pageService.PAGES.edit,
    //   book: this.word.book - 1,
    //   chapter: this.word.chapter,
    //   verse: this.word.verse
    // });
  }
}
