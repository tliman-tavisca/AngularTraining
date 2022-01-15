import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { Product } from "../../models/product.interface";

@Component({
  selector: "stock-products",
  styleUrls: ["stock-products.component.scss"],
  template: `
    <div class="stock-products" [formGroup]="parent">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">
              {{ getProduct(item.value.product_id)?.name }}
            </div>

            <div class="stock-product__price">
              {{
                getProduct(item.value.product_id)?.price | currency: "USD":true
              }}
            </div>

            <input
              type="number"
              step="10"
              min="10"
              max="1000"
              formControlName="quantity"
            />

            <button type="button" (click)="onRemove(item, id)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class StockProductsComponent {
  @Input()
  parent: FormGroup;

  @Input()
  map: Map<number, Product>;

  get stocks() {
    return (this.parent.get("stock") as FormArray).controls;
  }

  @Output()
  itemRemoved = new EventEmitter<any>();

  onRemove(group, index) {
    this.itemRemoved.emit({ group, index });
  }

  getProduct(id) {
    return this.map.get(id);
  }
}
