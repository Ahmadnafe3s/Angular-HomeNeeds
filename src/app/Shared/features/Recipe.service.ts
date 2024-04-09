import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, map, throwError } from "rxjs";
import { AuthService } from "../../auth/auth.service";
import { RecipeModel } from "src/app/recipe-book/recipe-model";

@Injectable()

export class RecipeService {
  
  toShopping = new Subject<any>()
  recipeList: RecipeModel[] = [];
  recipesApi: string = 'https://recipe-book-431a4-default-rtdb.firebaseio.com/recipes.json'

  Index = new BehaviorSubject<null | string>(null)

  constructor(private http: HttpClient, private authService: AuthService) { }

  onPost(formValue) {

    this.http.post(this.recipesApi, formValue).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  onUpdate(index: number, FormValue) {
    this.recipeList[index] = FormValue
    this.http.put(this.recipesApi, this.recipeList).subscribe(
      res => {
        console.log(res);
      }
    )
  }


  onDelete(deletdData: RecipeModel[]) {
    this.http.put(this.recipesApi, deletdData).subscribe(
      res => {
        console.log(res);
      }
    )
  }


  getRecipes() {

    return this.http.get<RecipeModel[]>(this.recipesApi).pipe(map(RecipeList => {
      let tempArry = []
      for (const Objkey in RecipeList) {
        tempArry.push({ ID: Objkey, ...RecipeList[Objkey] })
      }
      return tempArry
    }),
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse) {

    if (!error.error || !error.error.error) {
      return throwError(() => {
        throw new Error('Network Error')
      })
    }

    return throwError(() => {
      throw new Error(error.error.error)
    })

  }

}

