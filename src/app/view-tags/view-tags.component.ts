import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-view-tags',
  templateUrl: './view-tags.component.html',
  styleUrls: ['./view-tags.component.css']
})
export class ViewTagsComponent implements OnInit, OnDestroy {
  tags = [];
  getTagList;

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit() {
    this.getTagList = this.searchDataService.getTagList().subscribe(
      data => {
        const tagArray = data.json();

        for (const tag of tagArray) {
          this.tags.push(tag.text);
        }
      }
    );
  }

  ngOnDestroy() {
    this.getTagList.unsubscribe();
  }

}
