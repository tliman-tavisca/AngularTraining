import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { StockInventoryComponent } from "../stock-inventory/containers/stock-inventory.compoent";
import { StockSelectorComponent } from "./components/store-selector/stock-selector.component";
import { StockProductsComponent } from "./components/stock-products/stock-products.component";
import { StockBranchComponent } from "./components/stock-branch/stock-branch.component";
import { StockInventoryService } from "./services/stock-inventory.service";
import { StockCounterComponent } from "./components/stock-counter/stock-counter.component";

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockCounterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpModule],
  exports: [StockInventoryComponent],
  providers: [StockInventoryService],
})
export class StockInventoryModule {}
