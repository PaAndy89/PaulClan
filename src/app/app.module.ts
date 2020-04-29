
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

//root
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
//framework
import { HeadComponent } from './01_head/head.component';
import { BodyComponent } from './02_body/body.component';
import { FootComponent } from './03_foot/foot.component';
//00
import { HomeComponent } from './02_body/00_home/home.component';
//01
import { RecipesComponent } from './02_body/01_recipes/recipes.component';
import { RecipesListComponent } from './02_body/01_recipes/recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './02_body/01_recipes/recipes-list/recipes-list-item/recipes-list-item.component';
import { RecipesDetailComponent } from './02_body/01_recipes/recipes-detail/recipes-detail.component';
//02
import { MealPlanComponent } from './02_body/02_meal-plan/meal-plan.component';
//03
import { ShoppingComponent } from './02_body/03_shopping/shopping.component';
import { ShoppingEditComponent } from './02_body/03_shopping/shopping-edit/shopping-edit.component';
//10
import { ShiftPlanComponent, ShiftPlanComponentDialog } from './02_body/10_shift-plan/shift-plan.component';

@NgModule({
  entryComponents: [AppComponent],
  declarations: [
    //root
    AppComponent,
    //framework
    HeadComponent,
    BodyComponent,
    FootComponent,
    //00
    HomeComponent,
    //01
    RecipesComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    RecipesDetailComponent,
    //02
    MealPlanComponent,
    //03
    ShoppingComponent,
    ShoppingEditComponent,
    //10
    ShiftPlanComponent,
    ShiftPlanComponentDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    AppService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }