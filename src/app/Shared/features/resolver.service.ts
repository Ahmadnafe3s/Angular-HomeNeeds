import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "../../recipe-book/recipe-model";
import { Injectable } from "@angular/core";
import { RecipeService } from "./Recipe.service";
@Injectable({
    providedIn: 'root'
})
export class ResolverService implements Resolve<Recipe[]>{
    constructor(private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
        return this.recipeService.FetchData()
    }
}