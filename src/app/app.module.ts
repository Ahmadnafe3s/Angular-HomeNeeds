import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from "./Shared/features/Recipe.service";
import { RouterModules } from "./Router.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { InteceptorService } from './auth/inteceptor.service';
import { SharedModule } from './Shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModules,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: InteceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
