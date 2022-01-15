import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CreditCardDirective } from "./credit-card/credit-card.directive";
import { TooltipDirective } from "./tooltip/tooltip.directive";
import { MyForDirective } from "./my-for/my-for.directive";

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
