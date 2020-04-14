import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import {PanierService} from './shared/services/panier.service';
import { HttpClientModule } from '@angular/common/http';
import {CocktailModule} from './cocktail-container/cocktail.module';
import { CocktailRoutingModule } from './cocktail-container/cocktail-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CocktailRoutingModule,
    HttpClientModule,
    CocktailModule,
    CocktailRoutingModule,
    SharedModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
