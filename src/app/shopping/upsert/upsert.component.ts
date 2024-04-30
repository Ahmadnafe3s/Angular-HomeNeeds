import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastService } from 'src/app/Shared/Toast/Toast.service';
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

    constructor(private recipeService: RecipeService, private router: Router, private activeRoute: ActivatedRoute, private toastService: ToastService) { }

    ngOnInit(): void {
        this.ShoppingList = JSON.parse(localStorage.getItem('Shopping')) ? JSON.parse(localStorage.getItem('Shopping')) : [];
        this.activeRoute.queryParams.subscribe((params: Params) => {
            this.editMode = params.Index // if parameter will be avaliabe so it will act as true otherwise false
            this.Index = params.Index
        })
        this.ShopForm();
    }


    onSubmit() {

        if (this.editMode) {

            this.ShoppingList[this.Index] = this.ShoppingForm.value
            localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
            this.toastService.Toast.next({ type: 'success', message: 'Ingredient Updated.', duration: 3000 })
            this.router.navigate(['shopping'])

        } else {

            this.ShoppingList.push(this.ShoppingForm.value);
            localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
            this.toastService.Toast.next({ type: 'success', message: 'Ingredient Saved.', duration: 3000 })
            
        }

        this.ShoppingForm.reset()
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
