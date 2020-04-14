import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service';
import {Ingredient} from '../../shared/models/ingredient.model';
import {PanierService} from '../../shared/services/panier.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss']
})
export class CocktailsDetailsComponent implements OnInit {

   cocktail: Cocktail;
   index: number;

  constructor(private cocktailService: CocktailService,
              private panierService: PanierService,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      if (params.get('index')) {
        this.index = params.get('index');
      } else {
        this.index = 0;

      }
      this.cocktailService.getCocktail(this.index).subscribe(cocktails => this.cocktail = cocktails);
    });

  }

  addPanier(ingredients: Ingredient[]): void{
    this.panierService.addIngredients(ingredients);
  }

  geturl(): string[] {
    return ['/cocktails',  this.index + '' , 'edit'];
  }
}
