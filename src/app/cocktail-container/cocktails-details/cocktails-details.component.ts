import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss']
})
export class CocktailsDetailsComponent implements OnInit {

   cocktail: Cocktail;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktail.subscribe(
      (cocktail) => {
        this.cocktail = cocktail;
      }
    );
  }


}
