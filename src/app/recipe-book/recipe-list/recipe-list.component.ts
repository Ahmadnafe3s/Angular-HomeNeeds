import {Component} from '@angular/core';
import {RecipeService} from "../../Recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipeList: any = '';
  isEdit:boolean = true;

  constructor(private recipeService: RecipeService) { //Services
    this.recipeList = JSON.parse(localStorage.getItem('recipes'))
  }

  deleterecipe(index: any): void {
    this.recipeList = JSON.parse(localStorage.getItem('recipes'))
    this.recipeList.splice(index, 1)
    localStorage.setItem('recipes', JSON.stringify(this.recipeList))
  }



  onRecipedetail(index: number) {
    this.recipeService.onRecipeDetail.emit(index)
  }

}

