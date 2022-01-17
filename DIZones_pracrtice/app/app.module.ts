import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { PizzaViewerComponent } from "./containers/pizza-viewer.component";
import { DrinkViewerComponent } from "./containers/drink-viewer.component";
import { SideViewerComponent } from "./containers/side-viewer.component";

import { AppComponent } from "./app.component";
import { API_TOKEN } from "./token";
import { FoodStoreModule } from "./food-store/food-store.module";

@NgModule({
  declarations: [
    AppComponent,
    PizzaViewerComponent,
    DrinkViewerComponent,
    SideViewerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FoodStoreModule.forRoot({
      storeId: 10292,
      storeToken: "eca938c99a0e9ff91029dc",
    }),
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: API_TOKEN, useValue: "/api/pizzas" }],
})
export class AppModule {}
