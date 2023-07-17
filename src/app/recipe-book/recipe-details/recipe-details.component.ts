import { Component , OnInit} from '@angular/core';
import {RecipeService} from "../../Recipe.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  Ingredient : any;
  index:number = 0;
RecipeDetail:any;
constructor(private recipeService:RecipeService) {
  this.recipeService.onRecipeDetail.subscribe((index:number)=>{
   this.index = index;
  })
  // console.log(this.index)
}
ngOnInit(): void {
  this.RecipeDetail = JSON.parse(localStorage.getItem('recipes'))
}

toShopping(event){
  this.recipeService.toShopping.emit(event);
}
}
