import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is simply a description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [new Ingredient('ingredient 1', 1),
      new Ingredient('ingredient 2', 2)
      ]),
    new Recipe(
      'A test Recipe 2',
      'this is simply a description 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [new Ingredient('ingredient 3', 3),
      new Ingredient('ingredient 4', 4)
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice(); //returns a copy of the array instead of the array itself
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
