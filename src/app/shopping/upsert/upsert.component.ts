import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
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
    ShoppingForm: FormGroup;
    msg: string | null = null;
    constructor(private recipeService: RecipeService, private router: Router) { }

    ngOnInit(): void {
        if (localStorage.getItem('Shopping') == null) {
            localStorage.setItem('Shopping', JSON.stringify([]));
        }
        this.ShoppingList = JSON.parse(localStorage.getItem('Shopping'));
        this.recipeService.Index.pipe(take(1)).subscribe(index => {
            this.Index = +index
            this.editMode = !!index
        })

        this.ShopForm();
    }


    insertData() {
        if (this.editMode) {
            this.ShoppingList[this.Index] = this.ShoppingForm.value
            localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
            this.editMode = false;
            this.msg = "Your data has been Updated! Do you want to Navigate"

        } else {
            this.ShoppingList.push(this.ShoppingForm.value);
            localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
            this.msg = "Your data has been Saved! Do you want to Navigate"
        }

        this.ShoppingForm.reset()
    }

    onOk() {
        this.router.navigate(['shopping'])
    }

    onClose() {
        this.msg = null;
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
