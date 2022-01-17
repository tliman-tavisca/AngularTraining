import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Product } from "../../models/product.interface";

@Component({
  selector: "stock-selector",
  styleUrls: ["stock-selector.component.scss"],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select Stock</option>
          <option *ngFor="let product of products" [value]="product.id">
            {{ product.name }}
          </option>
        </select>

        <!-- 
        <input
          type="number"
          step="10"
          min="10"
          max="100"
          formControlName="quantity"
        /> -->

        <stock-counter
          [step]="10"
          [min]="10"
          [max]="100"
          formControlName="quantity"
        ></stock-counter>

        <button
          type="button"
          (click)="onAdd()"
          [disabled]="stockExists || notSelected"
        >
          Add Stock
        </button>

        <div class="stock-selector__error" *ngIf="stockExists">
          Item already exists in the stock
        </div>
      </div>
    </div>
  `,
})
export class StockSelectorComponent {
  @Input()
  parent: FormGroup;

  @Input()
  products: Product[];

  @Output()
  itemAdded = new EventEmitter<any>();

  get stockExists() {
    return (
      this.parent.hasError("stockExists") &&
      this.parent.get("selector.product_id").dirty
    );
  }

  get notSelected() {
    return !this.parent.get("selector.product_id").value;
  }

  onAdd() {
    this.itemAdded.emit(this.parent.get("selector").value);

    //update whole object
    // this.parent.get("selector").reset({
    //   product_id: "",
    //   quantity: 10,
    // });

    // Update only few controls
    // this.parent.get("selector").patchValue({
    //   quantity: 20,
    // });

    // Update only few controls
    this.parent.get("selector").setValue({
      product_id: "",
      quantity: 20,
    });
  }
}
