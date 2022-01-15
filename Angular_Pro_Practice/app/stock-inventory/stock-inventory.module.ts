import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { StockInventoryComponent } from "../stock-inventory/containers/stock-inventory.compoent";
import { StockSelectorComponent } from "./components/store-selector/stock-selector.component";
import { StockProductsComponent } from "./components/stock-products/stock-products.component";
import { StockBranchComponent } from "./components/stock-branch/stock-branch.component";

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [StockInventoryComponent],
})
export class StockInventoryModule {}
