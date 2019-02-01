import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  providers: [ SearchService ]
})
export class MainNavComponent implements OnInit {
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor( private searchService: SearchService ) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }
  ngOnInit() {
  }

}
