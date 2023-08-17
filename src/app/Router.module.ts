import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./recipe-book/recipe-details/recipe-details.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { SelectRecipeComponent } from "./recipe-book/select-recipe/select-recipe.component";
import { ResolverService } from "./resolver.service";

const AppRoutes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe', component: RecipeBookComponent,  children: [
      { path: '', component: SelectRecipeComponent },
      { path: ':id/:name', component: RecipeDetailsComponent }
    ]
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'new', component: AddRecipeComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class RouterModules { }
