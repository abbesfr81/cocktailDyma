import { Pipe, PipeTransform } from '@angular/core';
import {Cocktail} from '../models/cocktail.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], recherche: string): Cocktail[] | null {
    if (!recherche.length) {
      return cocktails;
    } else {
      return cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(recherche.toLowerCase()) );
    }
  }

}
