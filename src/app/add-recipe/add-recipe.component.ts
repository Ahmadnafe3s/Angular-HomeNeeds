import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../Recipe.service";
import { ActivatedRoute, Params } from "@angular/router";
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipeList: any;
  editMode: boolean = false; //By default it will be false
  editIndex: number;

  constructor(private recipeService: RecipeService, private routeParam: ActivatedRoute) {
    this.recipeList = recipeService.getRecipes()

  }

  // subscribing queryParams

  ngOnInit(): void {

    this.routeParam.queryParams.subscribe((params: Params) => {
      this.editIndex = +params.edit
      this.editMode = params.editMode
      this.initForm();
    })
    console.log(this.recipeForm);
  }


  // FormGroup
  private initForm() {
    let RecipeName = '';
    let Description = '';
    let image = '';
    let RecipeDetail = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      RecipeName = this.recipeList[this.editIndex].RecipeName;
      Description = this.recipeList[this.editIndex].Description;
      image = this.recipeList[this.editIndex].Image
      RecipeDetail = this.recipeList[this.editIndex].RecipeDetail;
      if (this.recipeList[this.editIndex].ingredients) {
        for (let separateIng of this.recipeList[this.editIndex].ingredients) {
          ingredients.push(
            new FormGroup({
              'Item': new FormControl(separateIng.Item, Validators.required),
              'Amount': new FormControl(separateIng.Amount, Validators.required)
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'RecipeName': new FormControl(RecipeName, Validators.required),
      'Description': new FormControl(Description, Validators.required),
      'Image': new FormControl(image, Validators.required),
      'RecipeDetail': new FormControl(RecipeDetail, Validators.required),
      'ingredients': ingredients
    });
  }



  onSubmit() {
    if (this.editMode) {
      this.recipeService.onUpdate(this.editIndex, this.recipeForm.value)
    }
    else {
      this.recipeService.upsertdata(this.recipeForm.value)
    }

    this.editMode = false;
    this.recipeForm.reset();
    (<FormArray>this.recipeForm.get('ingredients')).clear(); // To delete all elemets inside the array..
  }


  addIngredient() {
    const Control = new FormGroup({
      'Item': new FormControl(null, Validators.required),
      'Amount': new FormControl(null, Validators.required)
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(Control);
  }

  onReset() {
    this.recipeForm.reset()
    this.editMode = false;
    (<FormArray>this.recipeForm.get('ingredients')).clear();
  }

  removeIng(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index) //works as splice method
  }

  get Controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }


}
