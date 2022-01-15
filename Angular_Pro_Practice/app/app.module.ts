import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CreditCardDirective } from "./credit-card/credit-card.directive";
import { TooltipDirective } from "./tooltip/tooltip.directive";
import { MyForDirective } from "./my-for/my-for.directive";
import { FileSizePipe } from "./pipesize.pipe";

import { StockInventoryModule } from "../app/stock-inventory/stock-inventory.module";

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    FileSizePipe,
  ],
  imports: [BrowserModule, StockInventoryModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
