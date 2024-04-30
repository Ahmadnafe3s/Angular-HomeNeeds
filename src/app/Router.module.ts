import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const AppRoutes: Routes = [
  { path: '', redirectTo: '/recipeList', pathMatch: 'full' },
  { path: 'recipeList', loadChildren: () => import('./recipe-book/recipe.module').then(x => x.RecipeModule) }, // mern syntax
  { path: 'shopping', loadChildren: () => import('./shopping/shopping.module').then(x => x.ShoppingModule) },
  { path: 'auth', loadChildren: () => import('./auth/Auth.module').then(x => x.AuthModule) },
  { path: 'Recipe-Form', loadChildren: () => import('./add-recipe/AddRecipe.module').then(x => x.AddRecipeModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules /*it gets rid for delay*/ })],
  exports: [RouterModule]
})
export class RouterModules { }
