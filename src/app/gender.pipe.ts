import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.model';

@Pipe({
  name: "gender",
  pure: false
})

export class GenderPipe implements PipeTransform {
  transform(input: Item[], genderSelection) {
    let output: Item[] = [];

    if ( genderSelection === "men" ) {
      for ( let i = 0; i < input.length; i++ ) {
        if ( input[i].gender === "men") {
          output.push(input[i]);
        }
      }
      return output;
    } else if ( genderSelection === "women" ) {
      for ( let i = 0; i < input.length; i++ ) {
        if ( input[i].gender === "women") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
