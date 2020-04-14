import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CocktailContainerComponent} from './cocktail-container.component';
import {CocktailEditComponent} from './cocktail-edit/cocktail-edit.component';
import {CocktailsDetailsComponent} from './cocktails-details/cocktails-details.component';


const cocktailRoutes: Routes = [

  { path: 'cocktails', component: CocktailContainerComponent, children: [
      { path: 'new', component: CocktailEditComponent},
      { path: ':index/edit', component: CocktailEditComponent},
      { path: ':index', component: CocktailsDetailsComponent },
      { path: '', component: CocktailsDetailsComponent }
    ] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cocktailRoutes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
