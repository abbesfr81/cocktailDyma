import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/models/ingredient.model';
import {Subscription} from 'rxjs';
import {PanierService} from '../../shared/services/panier.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.subscription = this.panierService.panier.subscribe( (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
