import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../Shared/features/Recipe.service';
import { Recipe } from '../recipe-book/recipe-model';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  constructor(private recipeService: RecipeService, private authService: AuthService) {
  }

  obser: Subscription;

  FetchData() {
    this.recipeService.FetchData().subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.recipeList = recipes;
      }
    )
  }



  ngOnInit(): void {
    this.obser = this.authService.Users.subscribe(
      user => {
        this.isAuthenticated = !user ? false : true;
      }
    )
  }


  ngOnDestroy(): void {
    this.obser.unsubscribe();
  }


  onLogout(){
    this.authService.onLogout()
  }
}
