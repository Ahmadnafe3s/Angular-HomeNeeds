import { NgModule } from "@angular/core";
import { AddRecipeComponent } from "./add-recipe.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../Shared/shared.module";

@NgModule({
    declarations:[
        AddRecipeComponent
    ],
    imports:[ReactiveFormsModule , CommonModule , SharedModule, RouterModule.forChild([
        { path: '', component: AddRecipeComponent },
    ])]
})

export class AddRecipeModule{}