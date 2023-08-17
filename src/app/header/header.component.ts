import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../Recipe.service';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }
  FetchData() {
    this.recipeService.FetchData().subscribe(
      (recipes:Recipe[]) => {
        this.recipeService.recipeList = recipes;
      }
    )
  }
}
