import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../../Shared/features/Recipe.service";
import { Router } from '@angular/router';
import { Recipe } from 'src/app/recipe-book/recipe-model';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [
    trigger('fade', [

      state('in', style({
        transform: 'transition(0)',
        opacity: 1
      })),

      transition('* => void', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 1,
            offset : 0.3
          }),
          style({
            transform: 'translateX(-150px)',
            opacity: 0.5,
            offset : 0.8
          }),
          style({
            transform: 'translateX(-200px)',
            opacity: 0,
            offset : 1
          })
        ]))
      ])

    ])

  ]
})
export class RecipeListComponent implements OnInit {
  isFetching: boolean = true;
  recipeList: Recipe[] = [];
  PlaceHolders = [1, 2, 3, 4, 5, 6]
  ErrorMsg: null | string = null;
  constructor(private recipeService: RecipeService, private router: Router) {
  }

  deleterecipe(index: any): void {
    if (confirm('Do you really want to delete!')) {
      this.recipeList.splice(index, 1)
      this.recipeService.onDelete(this.recipeList);
    }
  }



  onEdit(index: number) {
    this.router.navigate(['/new'], { queryParams: { edit: index, editMode: true } })
  }

  ngOnInit(): void {
    this.isFetching = true;
    this.recipeService.FetchData()

      .subscribe(
        (recipeData: Recipe[]) => {
          this.isFetching = false
          this.recipeList = recipeData;
        },

        (err) => {
          this.isFetching = false;
          if (!err.error || !err.error.error) {
            this.ErrorMsg = 'Network Error';
          } else {
            this.ErrorMsg = err.error.error;
          }

        }
      )
  }
}

