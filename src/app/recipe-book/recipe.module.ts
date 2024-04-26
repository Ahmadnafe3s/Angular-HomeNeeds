import { NgModule } from "@angular/core";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RouterModule } from "@angular/router";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../Shared/shared.module";
import { RecipeDetailsComponent } from "./recipe-details/recipe-deatials.component";

@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeDetailsComponent
    ],
    imports: [
        RouterModule,
        RecipeRoutingModule,
        SharedModule,
    ]
})

export class RecipeModule { }