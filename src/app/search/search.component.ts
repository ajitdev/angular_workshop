import { Component, OnInit } from '@angular/core';
import {SearchService} from '../service/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private keyword: String = '';
  private searchResults: String = '';
  private searchtext: any = {};
  private search_service: any = {};
  constructor(private searchService:SearchService) {
    this.search_service = searchService;
  }
  ngOnInit() {
    this.keyword = '';
  }
  SearchGoogleCustom() {
    this.keyword = this.searchtext.keyword;
    this.search_service.displayResults(this.keyword);
  }

}
