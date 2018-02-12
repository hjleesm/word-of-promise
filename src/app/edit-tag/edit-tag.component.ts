import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../word';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {
  @Input() word: Word;
  tags;

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit() {
    this.tags = this.word.getTagString();
  }

  applyTags() {
    this.searchDataService.applyTags(this.word.book, this.word.chapter,
      this.word.verse, this.tags.split(', '));
  }

}
