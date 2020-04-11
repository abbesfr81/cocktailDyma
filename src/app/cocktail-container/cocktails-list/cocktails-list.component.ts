import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent implements OnInit {

   cocktails: Cocktail[];

  activeCocktail = 0;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe(
      (cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      }
    );
  }
  public pickCocktail(index: number): void {
    this.activeCocktail = index;
    this.cocktailService.selectCocktail(index);
  }
}
