import { NgModule } from "@angular/core";
import { AddRecipeComponent } from "./add-recipe.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../Shared/shared.module";
import { AddRecipeRouter } from "./add-recipe.router.module";

@NgModule({
    declarations: [
        AddRecipeComponent
    ],
    imports: [ReactiveFormsModule, CommonModule, SharedModule, AddRecipeRouter]
})

export class AddRecipeModule { }