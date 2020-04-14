import { Injectable } from '@angular/core';
import {Cocktail} from '../models/cocktail.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);


  constructor(private http: HttpClient) {
   this.cocktailsInit();
  }

  cocktailsInit(): void {
    this.http.get<Cocktail []>('https://cocktails-angular-ba9bb.firebaseio.com/cocktails.json').subscribe(cocktails => {
      this.cocktails.next(cocktails);
    });
  }

  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter(cocktails => cocktails != null),
      map(cocktails => cocktails[index])
    );
  }

  addCocktail(cocktail: Cocktail) {
    const cocktails = this.cocktails.value;
    cocktails.push({name: cocktail.name, img: cocktail.img, desc: cocktail.desc, ingredients: cocktail.ingredients});
    this.cocktails.next(cocktails);
  }

  editCocktail(editCocktail: Cocktail) {
    const cocktails = this.cocktails.value;
    const index = cocktails.findIndex(c => c.name === editCocktail.name);
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
    this.saveCocktail();
  }
  saveCocktail(): void {
    console.log(this.cocktails.value);
    this.http.put<Cocktail[]>('https://cocktails-angular-ba9bb.firebaseio.com/cocktails.json', this.cocktails.value).subscribe(
      (cock) => {
        this.cocktails.next(cock);
      }
    );
  }
}
