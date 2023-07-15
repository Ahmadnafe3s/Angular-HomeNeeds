import { Component , OnInit} from '@angular/core';
import {RecipeService} from "../../Recipe.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

// @Input() public index:number;
  index:number = 0;
RecipeDetail:any;
constructor(private recipeService:RecipeService) {
  this.recipeService.onRecipeDetail.subscribe((index:number)=>{
this.index = index;
  })
}
ngOnInit(): void {
  this.RecipeDetail = JSON.parse(localStorage.getItem('recipes'))
}
}
