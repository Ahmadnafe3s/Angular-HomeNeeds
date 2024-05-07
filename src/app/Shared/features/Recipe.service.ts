import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, map, throwError } from "rxjs";
import { AuthService } from "../../auth/auth.service";
import { RecipeModel } from "src/app/recipe-book/recipe-model";

@Injectable()

export class RecipeService {
  userID: string;
  recipesApi: string = 'https://recipe-book-431a4-default-rtdb.firebaseio.com/recipes'

  constructor(private http: HttpClient, private authService: AuthService) {}


  onPost(formValue) {
    return this.http.post(`${this.recipesApi}.json`, formValue).pipe(catchError(this.handleError))
  }

  onUpdate(RID: String, FormValue) {
    return this.http.put(`${this.recipesApi}/${RID}.json`, FormValue).pipe(catchError(this.handleError))
  }


  getRecipeDeatils(RID: String) {
    return this.http.get<RecipeModel>(`${this.recipesApi}/${RID}.json`).pipe(map(recipeDetails => {
      return { ID: RID, ...recipeDetails }
    }), catchError(this.handleError))
  }

  deleteRecipe(RID: String) {
    return this.http.delete(`${this.recipesApi}/${RID}.json`)
  }


  getRecipes() {
    return this.http.get<RecipeModel[]>(`${this.recipesApi}.json`).pipe(map(RecipeList => {
      let tempArry = []
      for (const Objkey in RecipeList) {
        tempArry.push({ RID: Objkey, ...RecipeList[Objkey] })
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

