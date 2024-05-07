import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';



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

    constructor(
        private router: Router, 
        private activeRoute: ActivatedRoute, 
        private toast : NgToastService
    ) { }


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
            this.toast.success({ detail: "Success", summary: 'Ingredient Updated.', duration: 3000, position: 'topCenter' })
            this.router.navigate(['shopping'])

        } else {

            this.ShoppingList.push(this.ShoppingForm.value);
            localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
            this.toast.success({ detail: "Success", summary: 'Ingredient Been Saved.', duration: 3000, position: 'topCenter' })
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
