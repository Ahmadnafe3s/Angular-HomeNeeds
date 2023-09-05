import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs';
import { RecipeService } from 'src/app/Shared/features/Recipe.service';

@Component({
    selector: 'app-upsert',
    templateUrl: './upsert.component.html',
    styleUrls: ['./upsert.component.css']
})
export class UpsertComponent implements OnInit {
    ShoppingList: any = [];
    editMode: boolean = false;
    Index: number;
    ShoppingForm: FormGroup

    constructor(private params: ActivatedRoute , private recipeService : RecipeService) { }

    ngOnInit(): void {
        this.ShoppingList = JSON.parse(localStorage.getItem('Shopping'));

        this.recipeService.Index.pipe(take(1)).subscribe(index=>{
            this.Index = index
            this.editMode = !!index
        })
        
        this.ShopForm();
    }


    insertData() {
        if (this.editMode) {
            this.ShoppingList[this.Index] = this.ShoppingForm.value
            localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));

        } else {

            this.ShoppingList.push(this.ShoppingForm.value);
            localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
        }
    }


    private ShopForm() {
        let Item = ''
        let Amount = ''

        if (this.editMode) {
            Item = this.ShoppingList[this.Index].Item,
                Amount = this.ShoppingList[this.Index].Amount
        }

        this.ShoppingForm = new FormGroup({
            'Item': new FormControl(Item, Validators.required),
            'Amount': new FormControl(Amount, Validators.required),
        })
    }


    reset() {
        this.ShoppingForm.reset()
        this.editMode = false;
    }


}
