import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../../word';
import { SearchDataService } from '../../search-data.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {
  @Input() word: Word;
  @Input() tags;

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit() {
    this.tags = this.word.getTagString();
  }

  applyTags() {
    let tagArray;

    if (this.tags.trim() === '') {
      tagArray = [];
    } else {
      this.tags = this.tags.replace(/ /gi, '');
      tagArray = this.tags.split(',');
    }

    this.searchDataService.applyTags(this.word.book, this.word.chapter,
      this.word.verse, tagArray).subscribe(res => {
        this.word.tags = tagArray;
      });
  }
}
