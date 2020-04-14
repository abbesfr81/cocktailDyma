import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CocktailService} from '../../shared/services/cocktail.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Cocktail} from '../../shared/models/cocktail.model';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;
  public cocktail: Cocktail;
  public edit: boolean;

  constructor(private fb: FormBuilder,
              private cocktailService: CocktailService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      if (params.get('index')) {
        this.edit = true;
        this.cocktailService.getCocktail(params.get('index')).subscribe(
          (cocktail: Cocktail) => {
            this.cocktail = cocktail;
            this.initForm(this.cocktail);
          }
        );
      } else {
        this.initForm();
      }
    });
  }
  initForm(cocktail = {name: '', img: '', desc: '', ingredients: []}) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      desc: cocktail.desc,
      ingredients: this.fb.array(cocktail.ingredients.map(
        ingredient => this.fb.group({name: ingredient.name, quantity: ingredient.quantity})))
    });
  }
  addIngredient() {
    ( this.cocktailForm.get('ingredients') as FormArray ).push(this.fb.group({
      name: '',
      quantity: ''
    }));
  }

  saveCocktail() {
    if (this.edit) {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
  }
}
