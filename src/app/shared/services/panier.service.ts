import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PanierService {

  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);

  constructor() { }

  addIngredients(ingredients: Ingredient[]) {
    const currentValue = this.panier.value;
    if (currentValue && currentValue.length) {
      this.panier.next(currentValue.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }
  }
}
