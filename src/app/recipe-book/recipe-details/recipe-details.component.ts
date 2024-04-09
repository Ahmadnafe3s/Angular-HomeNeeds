import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../../Shared/features/Recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  index: number;
  RecipeDetail;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    // this.RecipeDetail = this.recipeService.getRecipes()
    this.route.params.subscribe((params: Params) => {
      this.index = +params.id
    })
  }

  toShopping(event) {
    this.recipeService.toShopping.next(event);
    this.router.navigate(['shopping']);
  }

}
