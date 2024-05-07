import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../../Shared/features/Recipe.service";
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {
  recipeList: RecipeModel[] = [];
  isLoading = false;
  ErrorMsg: null | string = null;


  constructor(private recipeService: RecipeService, private router: Router, private active: ActivatedRoute) {
  console.log(this.recipeList.length < 1);
  
  }


  ngOnInit(): void {

    this.isLoading = true

    this.recipeService.getRecipes()
      .subscribe(
        (recipeLists) => {
          this.isLoading = false
          this.recipeList = recipeLists;
        },

        (err) => {
          this.isLoading = false
          this.ErrorMsg = err
        }
      )
  }

  onCheckout(RID: String) {
    this.router.navigate(['details', RID], { relativeTo: this.active })
  }

}

