import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanierComponent} from './panier/panier.component';
import {CocktailContainerComponent} from './cocktail-container/cocktail-container.component';
import {CocktailsDetailsComponent} from './cocktail-container/cocktails-details/cocktails-details.component';
import {CocktailEditComponent} from './cocktail-container/cocktail-edit/cocktail-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  { path: 'panier', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
