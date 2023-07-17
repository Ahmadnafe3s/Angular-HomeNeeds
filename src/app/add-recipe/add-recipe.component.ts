import {Component, ElementRef, ViewChild} from '@angular/core';
import {RecipeService} from "../Recipe.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  @ViewChild('item') Item: ElementRef;
  @ViewChild('amount') Amount: ElementRef;

  formValidation: string = '';

  constructor(private recipeService: RecipeService) {
  }

  recipeList: any = '';
  recipeObject = {
    RecipeName: '',
    Description: '',
    RecipeDetail: '',
    ingredients: []
  }

  ingridieantObj = {
    Item: '',
    Amount: ''
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


  addIngredient() {
    this.recipeObject.ingredients.push(this.ingridieantObj = {
      Item: this.Item.nativeElement.value,
      Amount: this.Amount.nativeElement.value
    })

    this.formValidation = `<div class="alert alert-success text-center d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2 " role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        <strong>${this.Item.nativeElement.value}!</strong>  Added.
      </div>
    </div>`

  }

}
