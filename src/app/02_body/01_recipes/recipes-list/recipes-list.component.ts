import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Schnitzel", "Das ist ein Schnitzel", "https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg"),
    new Recipe("Schnitzel", "Das ist 2 Schnitzel", "https://www.daringgourmet.com/wp-content/upl"),
    new Recipe("Schnitzel", "Das ist 4 Schnitzel", "https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
