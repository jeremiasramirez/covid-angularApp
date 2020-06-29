import { Component  } from '@angular/core';
import { Feature  } from '../services/feature.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    Feature
  ]
})
export class SearchComponent   {

  constructor(public feature:Feature) {
    this.feature.change("Search")
   }

  

}
