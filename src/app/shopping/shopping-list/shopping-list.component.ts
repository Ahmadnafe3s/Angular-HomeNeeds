import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../../Shared/features/Recipe.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/Shared/Toast/Toast.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})

export class ShoppingListComponent implements OnInit {
  ShoppingList: any = [];
  delMsg: null | string;
  index: number;
  deleteAll: boolean = false;
  constructor(private recipeService: RecipeService,
    private route: Router,
    private active: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.ShoppingList = JSON.parse(localStorage.getItem('Shopping'));
  }


  deleteData(index: number) {
    this.index = index;
    this.delMsg = "Are you sure to delete this item"
  }

  onOk() {

    if (this.deleteAll) {

      localStorage.setItem('Shopping', JSON.stringify([]))
      this.ShoppingList = [];
      this.deleteAll = false;
    } else {
      this.ShoppingList.splice(this.index, 1)
      localStorage.setItem('Shopping', JSON.stringify(this.ShoppingList));
    }

    this.delMsg = null;
    this.toastService.Toast.next({ type: 'success', message: 'Data Deleted.', duration: 3000 })
  }

  onClose() {
    this.delMsg = null;
  }

  editIngredient(index: number) {
    this.recipeService.Index.next(index.toString())
    this.route.navigate(['new'], { relativeTo: this.active })
  }


  onAddmore() {
    this.recipeService.Index.next(null)
    this.route.navigate(['new'], { relativeTo: this.active })
  }
  

  onDeleteAll() {
    this.deleteAll = true;
    this.delMsg = 'Are you sure to delete all data.'
  }

}
