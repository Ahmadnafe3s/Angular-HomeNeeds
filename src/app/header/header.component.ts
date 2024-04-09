import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { RecipeService } from '../Shared/features/Recipe.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @ViewChild('checkbox') checkbox: ElementRef;

  isAuthenticated = false;
  isNavopen = false;

  constructor(private recipeService: RecipeService, private authService: AuthService, private renderer: Renderer2) { }

  obser: Subscription;
  logMsg: string | null = null;


  FetchData() {
    // this.recipeService.FetchData().subscribe(
    //   (recipes: Recipe[]) => {
    //     this.recipeService.recipeList = recipes;
    //   }
    // )
  }


  handleNav() {
    this.isNavopen = !this.isNavopen
  }

  onNavigate() {
    this.isNavopen = false;
    this.checkbox.nativeElement.checked = false
  }


  ngOnInit(): void {
    this.obser = this.authService.Users.subscribe(
      user => {
        this.isAuthenticated = !user ? false : true;
      }
    )
  }


  ngOnDestroy(): void {
    this.obser.unsubscribe();
  }


  onLogout() {
    this.logMsg = 'Do you really want to logout!'
  }

  onClose() {
    this.logMsg = null;
  }

  onOk() {
    this.logMsg = null;
    this.authService.onLogout()
  }
}
