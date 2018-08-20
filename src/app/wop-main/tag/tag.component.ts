import { Component, OnInit, Input } from '@angular/core';
import { SearchDataService } from '../../search-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() tag;
  @Input() size;

  constructor(
    private searchDataService: SearchDataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onTagClicked() {
    this.router.navigate(['result', 'tag', this.tag]);
  }
}
