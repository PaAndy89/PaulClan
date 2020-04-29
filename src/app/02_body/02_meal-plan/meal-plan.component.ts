import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html'
})
export class MealPlanComponent implements OnInit {

  days: Array<string[any]> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  calWeeks: Array<string[any]>

  constructor() { }

  ngOnInit(): void {
  }

  
  kalenderWoche(date) {

    var currentThursday = new Date(date.getYear(), date.getMonth(), date.getDate());
    currentThursday.setDate(currentThursday.getDate() + (3 - ((currentThursday.getDay() + 6) % 7)))

    // At the beginnig or end of a year the thursday could be in another year.
    var yearOfThursday = currentThursday.getFullYear();

    // Get first Thursday of the year
    var firstThursday = new Date(new Date(yearOfThursday, 0, 4).getTime() + (3 - ((new Date(yearOfThursday, 0, 4).getDay() + 6) % 7)) * 86400000);

    // +1 we start with week number 1
    // +0.5 an easy and dirty way to round result (in combinationen with Math.floor)
    var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000 / 7);

    return weekNumber;
  }

}
