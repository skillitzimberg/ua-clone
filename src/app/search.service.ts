// This code is from [alligator.io](https://alligator.io/angular/real-time-search-angular-rxjs/)

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';
//
// @Injectable()
// export class SearchService {
//   baseUrl: string = 'https://ua-clone.firebaseio.com';
//   queryUrl: string = '?search=';
//
//   constructor( private http: HttpClient ) { }
//
//   search(terms: Observable<string>) {
//     return terms.debounceTime(400)
//       .distinctUntilChanged()
//       .switchMap(term => this.searchEntries(term));
//   }
//
//   searchEntries(term) {
//     return this.http
//         .get(this.baseUrl + this.queryUrl + term)
//         .map(res => JSON.parse(res));
//   }
// }
