import { Component, OnInit, Input } from '@angular/core';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() tag;

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit() {
  }

  onTagClicked() {
    this.searchDataService.searchByTag(this.tag);
  }
}
