import { Component,Input } from '@angular/core';
import { Item } from '../item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  genderClicked: string = this.router.url;
  
  @Input() items: Item[];

  constructor( private router: Router ) { }

}
