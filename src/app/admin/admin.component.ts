import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

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

    console.log(newItem);
  }


}
