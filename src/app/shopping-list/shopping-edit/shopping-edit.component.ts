import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from "../../Recipe.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') ingredientForm: NgForm;
  ShoppingList: any = [];
  editMode: boolean = false;
  editIngredientIndex: number;
  constructor(private recipeService: RecipeService) {

  }


  insertData(form: NgForm) {
    if (this.editMode) {
      this.ShoppingList[this.editIngredientIndex] = form.value
      localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));

    } else {

      this.ShoppingList.push(form.value);
      localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
    }
  }


  ngOnInit(): void {
    this.ShoppingList = JSON.parse(localStorage.getItem('Shopping'));
    if (localStorage.getItem('Shopping') !== null) {
      this.recipeService.toShopping.subscribe((event: any) => {
        event.forEach((elements) => {  //Pushing objects into array in separate index .
          this.ShoppingList.push(elements);
        })        
        localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
      })
    
    }

  }

  deleteData(index: number) {
    this.ShoppingList = JSON.parse(localStorage.getItem('Shopping'));
    this.ShoppingList.splice(index, 1)
    localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
  }

  editIngredient(index: number) {
    this.editMode = true;
    this.editIngredientIndex = index;
    this.ingredientForm.setValue({
      Item: this.ShoppingList[index].Item,
      Amount: this.ShoppingList[index].Amount
    })
  }

  reset(){
    this.ingredientForm.reset()
    this.editMode = false;
  }

  getClass(amount){
    return{
      'alert-success' : amount > 0 && amount < 6,
      'alert-warning' : amount > 5 && amount < 11,
      'alert-danger' : amount > 10,
    }
  }
}
