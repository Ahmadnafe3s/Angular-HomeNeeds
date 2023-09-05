import { Component} from '@angular/core';
import {RecipeService} from "../Shared/features/Recipe.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent{

  constructor(private RecipeService:RecipeService) {

  }

}
