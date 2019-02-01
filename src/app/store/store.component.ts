import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';

import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [ ItemService ]
})

export class StoreComponent implements OnInit {
  items;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.getItems()
    .subscribe((dataFromItemService) => {
      this.items=dataFromItemService;
    });
  }

}
