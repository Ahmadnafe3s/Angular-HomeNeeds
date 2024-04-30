import { RouterModule, Routes } from "@angular/router";
import { AddRecipeComponent } from "./add-recipe.component";
import { NgModule } from "@angular/core";
import { canDeactivateGuard } from "./can-deactivate.guard";

const routes: Routes = [
    { path: "", component: AddRecipeComponent , canDeactivate: [canDeactivateGuard] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AddRecipeRouter { }