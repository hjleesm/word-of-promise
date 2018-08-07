import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchDataService } from '../../search-data.service';

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
        const unit = (tagArray[0].count - tagArray[tagArray.length - 1].count) / (Math.floor(tagArray.length / 10) - 1);

        for (const tag of tagArray) {
          this.tags.push({
            text: tag.text,
            size: Math.floor(tag.count / unit) + 1
          });
        }
      }
    );
  }

  ngOnDestroy() {
    this.getTagList.unsubscribe();
  }

}
