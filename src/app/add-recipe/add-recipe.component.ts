import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../Recipe.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent  {

  formValidation: string = '';

  constructor(private recipeService: RecipeService) {
  }

  recipeList: any = '';
  recipeObject = {
    RecipeName: '',
    Description: '',
    RecipeDetail: ''
  }

  upsertdata(event: {
    recipeName: HTMLInputElement;
    recipeDescription: HTMLInputElement;
    recipeDetails: HTMLTextAreaElement
  }): any {
    if (this.validation(event)) {
      localStorage.getItem('recipes') == null ? this.recipeList = [] : this.recipeList = JSON.parse(localStorage.getItem('recipes'))
      this.recipeObject.RecipeName = event.recipeName.value;
      this.recipeObject.Description = event.recipeDescription.value;
      this.recipeObject.RecipeDetail = event.recipeDetails.value
      this.recipeList.push(this.recipeObject)
      localStorage.setItem('recipes', JSON.stringify(this.recipeList))
    }
  }


  validation(event) {
    if (event.recipeName.value == '') {
      this.formValidation = `<div class="alert alert-danger text-end d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2 " role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        <strong>Recipe Name!</strong> is missing.
      </div>
    </div>`
      return false
    } else if (event.recipeDescription.value == '') {
      this.formValidation = `<div class="alert alert-danger text-center d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2 " role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        <strong>Description!</strong> is missing.
      </div>
    </div>`
      return false
    } else if (event.recipeDetails.value == '') {
      this.formValidation = `<div class="alert alert-danger text-center d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2 " role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        <strong>Recipe Detail!</strong> is missing.
      </div>
    </div>`
      return false
    } else {
      this.formValidation = '';
    }
    return true
  }


}
