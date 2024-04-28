import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingRouterModule } from "./shopping-router.module";
import { SharedModule } from "../Shared/shared.module";
import { UpsertComponent } from "./upsert/upsert.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingComponent } from "./shopping.component";


@NgModule({
    declarations: [
        ShoppingComponent,
        ShoppingListComponent,
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