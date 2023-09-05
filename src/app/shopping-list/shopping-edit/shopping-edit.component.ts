import { Component,  OnInit} from '@angular/core';
import { RecipeService } from "../../Shared/features/Recipe.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ShoppingList: any = [];

  constructor(private recipeService: RecipeService,
    private route: Router,
    private active: ActivatedRoute
  ){}

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
    this.recipeService.Index.next(index)
    this.route.navigate(['new'], { relativeTo: this.active})
  }


  onAddmore(){
    this.recipeService.Index.next(null)
    this.route.navigate(['new'], { relativeTo: this.active})
  }

}
