import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Product, Item } from "../models/product.interface";
import { StockInventoryService } from "../services/stock-inventory.service";
import { Observable } from "rxjs";

import "rxjs/add/observable/forkJoin";
import { StockValidators } from "./stock-inventory.validators";

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

        <stock-products
          [parent]="form"
          [map]="productMap"
          (itemRemoved)="removeStock($event)"
        >
        </stock-products>

        <div>Total: {{ total | currency: "USD":true }}</div>

        <div class="store-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order Stock</button>
        </div>
      </form>

      <pre> {{ form.value | json }} </pre>
    </div>
  `,
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [];
  total: number;

  productMap: Map<number, Product>;

  // Implementation with FormBuilder
  form = this.fb.group({
    store: this.fb.group({
      branch: ["", [Validators.required, StockValidators.CheckBranch]],
      code: ["", Validators.required],
    }),
    selector: this.createStock({}),
    stock: this.fb.array([]),
  });

  onSubmit() {
    console.log("Submit", this.form.value);
  }

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ""),
      quantity: new FormControl(stock.quantity || 10),
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

  constructor(
    private fb: FormBuilder,
    private stockInventoryService: StockInventoryService
  ) {}

  ngOnInit(): void {
    const cart = this.stockInventoryService.getCartItems();
    const products = this.stockInventoryService.getProducts();

    Observable.forkJoin(cart, products).subscribe(
      ([cart, products]: [Item[], Product[]]) => {
        const myMap = products.map<[number, Product]>((product) => [
          product.id,
          product,
        ]);
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach((element) => {
          this.addStock(element);
        });

        this.calculateTotal(this.form.get("stock").value);
        this.form
          .get("stock")
          .valueChanges.subscribe((value) => this.calculateTotal(value));
      }
    );
  }

  calculateTotal(value: Item[]) {
    const total = value.reduce((prev, next) => {
      return prev + next.quantity * this.productMap.get(next.product_id).price;
    }, 0);
    this.total = total;
  }
}

// IMplementation with FormGroup and FormControl
/*
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
*/
