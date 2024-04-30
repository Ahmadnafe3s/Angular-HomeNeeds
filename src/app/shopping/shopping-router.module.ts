import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingComponent } from "./shopping.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { UpsertComponent } from "./upsert/upsert.component";

const ShoppingRouter:Routes = [
    { path: '', component: ShoppingComponent , children:[
        {path: '' , component : ShoppingListComponent},
        {path : 'shoppingIngredient' , component:UpsertComponent}
    ]},
]


@NgModule({
imports:[RouterModule.forChild(ShoppingRouter)],
exports:[RouterModule]
})

export class ShoppingRouterModule{}