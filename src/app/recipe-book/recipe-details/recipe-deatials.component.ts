import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "src/app/Shared/features/Recipe.service";
import { RecipeModel } from "../recipe-model";
import { NgToastService } from "ng-angular-popup";


@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-deatials.component.html',
    styleUrls: ['./recipe-deatials.component.css']
})

export class RecipeDetailsComponent implements OnInit {
    ID: String;
    RecipeDetails: RecipeModel;
    isLoading = false;
    Details: String;
    deleteMessage: null | string = null;

    constructor(private activeRouter: ActivatedRoute, private recipeService: RecipeService, private router: Router, private toast: NgToastService) {
        this.activeRouter.params.subscribe((params: Params) => {
            this.ID = params.id;
        })
    }

    ngOnInit(): void {

        this.isLoading = true;

        this.recipeService.getRecipeDeatils(this.ID).subscribe(details => {
            this.RecipeDetails = details;
            //For Displaying TextArea content into multiple lines 
            this.Details = details.RecipeDetail.replace(/\n/g, "<br>")
            this.isLoading = false;
        },
            err => {
                this.toast.error({ detail: "Error", summary: err, duration: 3000, position: 'topCenter' })
            }
        )
    }

    onDelete() {
        this.deleteMessage = "Do you really wants to delete this Recipe."
    }

    onOk() {
        this.recipeService.deleteRecipe(this.ID).subscribe(() => {
            this.deleteMessage = null;
            this.toast.info({ detail: "Info", summary: 'Recipe Deleted.', duration: 3000, position: 'topCenter' })
            this.router.navigate(['recipeList'])
        },
            err => {
                this.toast.error({ detail: "Error", summary: err, duration: 3000, position: 'topCenter' })
            }
        )
    }

    onClose() {
        this.deleteMessage = null;
    }

    onEdit() {
        this.router.navigate(['Recipe-Form'], { queryParams: { ID: this.ID }, fragment: 'Update-Recipe' })
    }


    onShoppingList() {
        let list: Object[];
        list = JSON.parse(localStorage.getItem('Shopping')) ? JSON.parse(localStorage.getItem('Shopping')) : []
        for (const Ingredients of this.RecipeDetails.ingredients) {
            list.push(Ingredients)
        }
        localStorage.setItem('Shopping', JSON.stringify(list))
        this.router.navigate(['shopping'])
        this.toast.info({ detail: "Info", summary: 'Ingrdients been sent to cart.', duration: 3000, position: 'topCenter' })
    }
}