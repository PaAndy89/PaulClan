import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../01_recipes/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html'
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Beans', 10)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
