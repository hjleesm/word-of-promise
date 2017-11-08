import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchWord:string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSearchBtn() {
    // TODO: emit to service
    // this.searchDataService.onSearchBtn(this.searchWord);
    this.router.navigate(['/result', this.searchWord]);
    
  }

}
