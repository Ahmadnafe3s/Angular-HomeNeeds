import { NgModule } from "@angular/core";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { ToggleWidthDirective } from "../Shared/features/toggle-width.directive";
import { SharedModule } from "../Shared/shared.module";

@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        ToggleWidthDirective
    ],
    imports:[
        RouterModule,
        RecipeRoutingModule,
        SharedModule
    ]
})

export class RecipeModule { }