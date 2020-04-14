import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CocktailsListComponent} from './cocktails-list/cocktails-list.component';
import {CocktailsDetailsComponent} from './cocktails-details/cocktails-details.component';
import {CocktailContainerComponent} from './cocktail-container.component';
import {CocktailEditComponent} from './cocktail-edit/cocktail-edit.component';
import {FilterPipe} from '../shared/pipes/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    CocktailsListComponent,
    CocktailsDetailsComponent,
    CocktailContainerComponent,
    CocktailEditComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: []
})
export class CocktailModule { }
