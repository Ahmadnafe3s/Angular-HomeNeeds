import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { UpsertComponent } from "./upsert/upsert.component";

const ShoppingRouter:Routes = [
    { path: '', component: ShoppingListComponent , children:[
        {path: '' , component : ShoppingEditComponent},
        {path : 'new' , component:UpsertComponent}
    ]},
]

@NgModule({
imports:[RouterModule.forChild(ShoppingRouter)],
exports:[RouterModule]
})
export class ShoppingRouterModule{}