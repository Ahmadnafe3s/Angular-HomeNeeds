import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from "./Shared/features/Recipe.service";
import { RouterModules } from "./Router.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { InteceptorService } from './auth/inteceptor.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModules,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: InteceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
