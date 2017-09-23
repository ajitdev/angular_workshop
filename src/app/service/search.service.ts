import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor() { }

  displayResults(keyword:String) {
    console.log(keyword);
  }

}
