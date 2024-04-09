import { NgModule } from "@angular/core";
import { AuthGuard } from "../auth/Auth-guard.service";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

// path null '' for parent comp because we gave it path inside the main route module 

const RecipeRoute: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: RecipeBookComponent, children: [
      { path: '', component: RecipeListComponent },
      { path: 'details/:id', component: RecipeDetailsComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(RecipeRoute)],
  exports: [RouterModule]
})


export class RecipeRoutingModule {

}