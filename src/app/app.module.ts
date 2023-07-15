import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from "@angular/forms";
import { ToggleWidthDirective } from './toggle-width.directive';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {RecipeService} from "./Recipe.service";
@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ToggleWidthDirective,
    AddRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
