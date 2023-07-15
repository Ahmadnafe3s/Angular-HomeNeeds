import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ShoppingList: any;
  ShoppingObject = {
    Item: '',
    Amount: ''
  }

  insertData(event: { ItemData: HTMLInputElement, AmountData: HTMLInputElement }) {
    localStorage.getItem('Shopping') === null ? this.ShoppingList = [] : this.ShoppingList = JSON.parse(localStorage.getItem('Shopping'));

    // This Method Works with Local Storage

    // this.ShoppingObject.Item = event.ItemData.value;
    // this.ShoppingObject.Amount = event.AmountData.value;
    // this.ShoppingList.push(this.ShoppingObject);

 // This Method can be Works both with Local Storage or without

    this.ShoppingList.push(this.ShoppingObject = {
      Item: event.ItemData.value,
      Amount: event.AmountData.value
    });

    localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));

  }

  ngOnInit(): void {
    this.ShoppingList = JSON.parse(localStorage.getItem('Shopping'));
  }

  deleteData(index:number){
    this.ShoppingList = JSON.parse(localStorage.getItem('Shopping'));
    this.ShoppingList.splice(index , 1)
    localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
  }

}
