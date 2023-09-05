import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../../Shared/features/Recipe.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Recipe } from 'src/app/recipe-book/recipe-model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  index: number;
  RecipeDetail:Recipe[];
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.RecipeDetail = this.recipeService.getRecipes()
    this.route.params.subscribe((params: Params) => {
    this.index = +params.id
    })
  }

  toShopping(event) {
    this.recipeService.toShopping.next(event);
  }
}
