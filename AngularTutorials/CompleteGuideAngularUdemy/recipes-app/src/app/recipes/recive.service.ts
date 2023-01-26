import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is simply a description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
    new Recipe(
      'A test Recipe 2',
      'this is simply a description 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
  ];

  getRecipes(){
    return this.recipes.slice(); //returns a copy of the array instead of the array itself
  }
}
