import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingRouterModule } from "./shopping-router.module";
import { SharedModule } from "../Shared/shared.module";
import { UpsertComponent } from "./upsert/upsert.component";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
        UpsertComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule,
        ShoppingRouterModule,
        SharedModule,
    ]
})
export class ShoppingModule { }