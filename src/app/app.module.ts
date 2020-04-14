import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import {PanierService} from './shared/services/panier.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CocktailModule} from './cocktail-container/cocktail.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CocktailModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
