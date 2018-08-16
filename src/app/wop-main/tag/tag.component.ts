import { Component, OnInit, Input } from '@angular/core';
import { SearchDataService } from '../../search-data.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() tag;
  @Input() size;

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit() {
  }

  onTagClicked() {
    // if (this.pageService.getPage() === this.pageService.PAGES.result) {
    //   this.searchDataService.searchByTag(this.tag);
    // } else {
    //   this.pageService.movePage({
    //     page: this.pageService.PAGES.result,
    //     searchWord: this.tag
    //   });
    // }
  }
}
