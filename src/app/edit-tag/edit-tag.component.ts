import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../word';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {
  @Input() word: Word;
  tags;

  constructor() { }

  ngOnInit() {
    this.tags = this.word.getTagString();
  }

}
