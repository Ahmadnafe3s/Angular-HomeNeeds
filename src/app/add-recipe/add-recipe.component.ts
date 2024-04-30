import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../Shared/features/Recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeModel } from '../recipe-book/recipe-model';
import { ToastService } from '../Shared/Toast/Toast.service';
import { DeactivateComponent } from './can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit, DeactivateComponent {

  recipeForm: FormGroup;
  editMode: boolean = false;
  ID: String;
  msg: string | null = null;
  isLoading: boolean = false;
  recipeDeatils: RecipeModel;
  length: number;

  constructor(
    private recipeService: RecipeService,
    private routeParam: ActivatedRoute,
    private route: Router,
    private toastService: ToastService
  ) { }



  // subscribing queryParams

  ngOnInit(): void {

    this.routeParam.queryParams.subscribe((params: Params) => {
      this.ID = params.ID
      this.editMode = params.ID
    })

    if (this.editMode) {
      this.isLoading = true;
      console.log("Fetching Data....");
      this.recipeService.getRecipeDeatils(this.ID).subscribe((recipeDetails) => {
        this.recipeDeatils = recipeDetails
        this.initForm();
        this.isLoading = false
      },
        err => {
          this.toastService.Toast.next({ type: 'error', message: err, duration: 3000 })
        })
    }

    this.initForm();
  }


  // FormGroup
  private initForm() {
    let RecipeName: String = '';
    let Description: String = '';
    let image: String = '';
    let RecipeDetail: String = '';
    let ingredients = new FormArray([]);

    if (this.editMode && this.recipeDeatils) {

      RecipeName = this.recipeDeatils.RecipeName
      Description = this.recipeDeatils.Description
      image = this.recipeDeatils.Image
      RecipeDetail = this.recipeDeatils.RecipeDetail

      for (const Ingredients of this.recipeDeatils.ingredients) {
        ingredients.push(
          new FormGroup({
            'Item': new FormControl(Ingredients.Item, Validators.required),
            'Amount': new FormControl(Ingredients.Amount, Validators.required)
          })
        )

      }
    }

    this.recipeForm = new FormGroup({
      'RecipeName': new FormControl(RecipeName, Validators.required),
      'Description': new FormControl(Description, [Validators.required, Validators.maxLength(70)]),
      'Image': new FormControl(image, Validators.required),
      'RecipeDetail': new FormControl(RecipeDetail, Validators.required),
      'ingredients': ingredients // here ingredient variable working as two ways (1st it Assigns FormArrayControl to this field , 2nd It assigns Array of form Group on editmode at this field.) 
    });
  }



  onSubmit() {
    this.isLoading = true;

    if (this.editMode) {

      this.recipeService.onUpdate(this.ID, this.recipeForm.value).subscribe(() => {
        this.toastService.Toast.next({ type: 'success', message: 'Recipe Got Updated.', duration: 3000 })
        this.isLoading = false;
        this.route.navigate(['recipeList/details', this.ID])
      }, err => {
        this.toastService.Toast.next({ type: 'error', message: err, duration: 3000 })
        this.isLoading = false;
      })

    }
    else {

      this.recipeService.onPost(this.recipeForm.value).subscribe(() => {
        this.toastService.Toast.next({ type: 'success', message: 'Recipe Got Saved.', duration: 3000 })
        this.isLoading = false;
      }, err => {
        this.toastService.Toast.next({ type: 'error', message: err, duration: 3000 })
        this.isLoading = false;
      })

    }

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

  removeIngControl() {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(length - 1) //works as splice method
  }

  get Controls() {
    this.length = (<FormArray>this.recipeForm.get('ingredients')).length;
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.recipeForm.valid) {
      return confirm("Are you sure to navigate.")
    }
    return true
  }
}
