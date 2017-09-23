import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
})
export class SearchComponent implements OnInit {
  private keyword: String = '';
  private searchResults: String = '';
  private searchtext: any = {};
  ngOnInit() {
    this.keyword = '';
  }
  SearchGoogleCustom() {
    this.keyword = this.searchtext.keyword;
    this.searchResults = this.searchtext.keyword;
  }

}
