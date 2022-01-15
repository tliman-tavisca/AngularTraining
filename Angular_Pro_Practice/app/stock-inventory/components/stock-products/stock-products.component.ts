import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";

@Component({
  selector: "stock-products",
  styleUrls: ["stock-products.component.scss"],
  template: `
    <div class="stock-products" [formGroup]="parent">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">
              {{ item.value.product_id }}
            </div>

            <input
              type="number"
              step="10"
              min="10"
              max="100"
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

  get stocks() {
    return (this.parent.get("stock") as FormArray).controls;
  }

  @Output()
  itemRemoved = new EventEmitter<any>();

  onRemove(group, index) {
    this.itemRemoved.emit({ group, index });
  }
}
