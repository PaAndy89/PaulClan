import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './02_body/00_home/home.component';
import { RecipesComponent } from './02_body/01_recipes/recipes.component';
import { MealPlanComponent } from './02_body/02_meal-plan/meal-plan.component';
import { ShoppingComponent } from './02_body/03_shopping/shopping.component';
import { ShiftPlanComponent, ShiftPlanComponentDialog } from './02_body/10_shift-plan/shift-plan.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Recipes', component: RecipesComponent },
  { path: 'Meal Plan', component: MealPlanComponent },  
  { path: 'Shopping List', component: ShoppingComponent },
  { path: 'Shift Plan', component: ShiftPlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
