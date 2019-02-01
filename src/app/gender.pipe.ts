import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.model';

@Pipe({
  name: "genderClicked",
  pure: false
})

export class GenderPipe implements PipeTransform {
  transform(input: Item[], genderSelection) {
    let output: Item[] = []
  }
}
