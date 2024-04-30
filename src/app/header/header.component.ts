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
  obser: Subscription;
  logMsg: string | null = null;


  constructor(private recipeService: RecipeService, private authService: AuthService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.obser = this.authService.Users.subscribe(
      user => {
        this.isAuthenticated = !user ? false : true;
      }
    )
  }

  onHamburger() {
    this.isNavopen = !this.isNavopen
    this.blockScroll()
  }

  onNavigate() {
    this.isNavopen = false;
    this.checkbox.nativeElement.checked = false
    this.blockScroll()
  }


  blockScroll() {

    const body = document.body

    if (this.isNavopen) {
      this.renderer.setStyle(body, 'overflow', 'hidden')
      return true
    }
    this.renderer.setStyle(body, 'overflow', 'auto')

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

  ngOnDestroy(): void {
    this.obser.unsubscribe();
  }

}
