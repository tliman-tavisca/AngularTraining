import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { Product } from "../models/product.interface";

@Component({
  selector: "stock-inventory",
  template: `
    <div>
      <form [formGroup]="form" (onSubmit)="onSubmit()">
        <stock-branch [parent]="form"> </stock-branch>

        <stock-selector
          [parent]="form"
          [products]="products"
          (itemAdded)="addStock($event)"
        >
        </stock-selector>

        <stock-products [parent]="form" (itemRemoved)="removeStock($event)">
        </stock-products>

        <div class="store-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order Stock</button>
        </div>
      </form>

      <pre> {{ form.value | json }} </pre>
    </div>
  `,
})
export class StockInventoryComponent {
  products: Product[] = [
    { id: 1, price: 2800, name: "Iphone" },
    { id: 2, price: 2000, name: "Iphone2" },
    { id: 3, price: 3800, name: "Iphone3" },
    { id: 4, price: 4800, name: "Iphone4" },
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl("Pune"),
      code: new FormControl("01120"),
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantiry: 20 }),
      this.createStock({ product_id: 3, quantiry: 40 }),
    ]),
  });

  onSubmit() {
    console.log("Submit", this.form.value);
  }

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ""),
      quantity: new FormControl(stock.quantiry || 10),
    });
  }

  addStock(stock) {
    const control = this.form.get("stock") as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get("stock") as FormArray;
    control.removeAt(index);
  }
}
