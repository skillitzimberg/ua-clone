import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ ItemService ]
})
export class AdminComponent implements OnInit {

  constructor( private itemService: ItemService ) { }

  ngOnInit() {
  }

  submitForm(
    gender: string,
    category: string,
    subcategories: string[],
    name: string,
    description: string,
    price: number,
    newArrival: boolean,
    bestSeller: boolean,
    outlet: boolean
  ) {
    let newItem: Item = new Item( gender, category, subcategories, name, description, price, newArrival, bestSeller, outlet );
    this.itemService.addItem(newItem);
    console.log(newItem);
  }


}
