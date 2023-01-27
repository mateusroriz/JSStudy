import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private  ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice()); //passando a copia da lista de ingredientes atualizada
  }

  addIngredients(ingredients: Ingredient[]){
    //for(let ingredient of ingredients){
    //  this.addIngredient(ingredient);
    //  } valido mas emite demais
    this.ingredients.push(...ingredients); //usando o ... spread operator para transformar um array de elementos em uma lista de elementos
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
