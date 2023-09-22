import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject,tap } from "rxjs";
import { Recipe } from "../../recipe-book/recipe-model";
import { AuthService } from "../../auth/auth.service";

@Injectable()

export class RecipeService {
  toShopping = new Subject<any>()
  recipeList: Recipe[] = [];
  RecipeLink: string = 'https://recipe-book-431a4-default-rtdb.firebaseio.com/recipes.json'

  Index = new BehaviorSubject<null|string>(null)

  constructor(private http: HttpClient, private authService: AuthService) { }


  upsertdata(formValue) {
    this.recipeList.push(formValue)
    this.http.put(this.RecipeLink, this.recipeList).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  onUpdate(index: number, FormValue) {
    this.recipeList[index] = FormValue
    this.http.put(this.RecipeLink, this.recipeList).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  getRecipes() {
    return this.recipeList.slice()
  }

  onDelete(deletdData: Recipe[]) {
    this.http.put(this.RecipeLink, deletdData).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  FetchData() {
    return this.http.get(this.RecipeLink).pipe(tap(
      (recipes: Recipe[]) => {
        this.recipeList = recipes
        return recipes;
      }
    ))
  }

}

