import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "src/app/Shared/features/Recipe.service";

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-deatials.component.html',
    styleUrls: ['./recipe-deatials.component.css']
})

export class RecipeDetailsComponent implements OnInit {
    ID: String;
    constructor(private activeRouter: ActivatedRoute, private recipeService: RecipeService) { }

    ngOnInit(): void {
        this.activeRouter.params.subscribe((params: Params) => {
            this.ID = params.id;
        })

        this.recipeService.getRecipeDeatils(this.ID).subscribe(details => {
            console.log(details);
        })
    }
}