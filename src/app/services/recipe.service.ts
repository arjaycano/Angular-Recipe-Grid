import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    { id: 1, name: 'Pancake', ingredients: ['Egg', 'Flour', 'Milk', 'Baking Powder'], imageUrl: 'assets/img/recipe1.jpeg' },
    { id: 2, name: 'Fried Rice', ingredients: ['Oil', 'Garlic', 'Rice', 'Pepper'], imageUrl: 'assets/img/recipe2.jpeg' },
    { id: 3, name: 'Fruit Salad', ingredients: ['Apple', 'Orange', 'Grape', 'Banana', 'Kiwi', 'Pineapple'], imageUrl: 'assets/img/recipe3.jpeg' },
    { id: 4, name: 'Brownies', ingredients: ['Egg', 'Sugar', 'Cocoa', 'Oil', 'Vanilla'], imageUrl: 'assets/img/recipe4.jpeg' },
    { id: 5, name: 'Donut', ingredients: ['Flour', 'Egg'], imageUrl: 'assets/img/recipe5.jpeg' }
  ];

  getRecipes() {
    return this.recipes;
  }
}
