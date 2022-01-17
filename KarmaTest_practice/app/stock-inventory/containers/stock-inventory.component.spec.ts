import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { DebugElement } from "@angular/core";
import { StockInventoryComponent } from "./stock-inventory.component";
import { StockBranchComponent } from "../components/stock-branch/stock-branch.component";
import { StockCounterComponent } from "../components/stock-counter/stock-counter.component";
import { StockProductsComponent } from "../components/stock-products/stock-products.component";
import { StockSelectorComponent } from "../components/stock-selector/stock-selector.component";
import { StockInventoryService } from "../services/stock-inventory.service";

import { ReactiveFormsModule } from "@angular/forms";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

class MockStockInventoryService {
  getProducts() {
    return Observable.of([
      { id: 1, price: 10, name: "test" },
      { id: 2, price: 20, name: "test1" },
    ]);
  }
  getCartItems() {
    return Observable.of([
      { product_id: 1, quantity: 10 },
      { product_id: 2, quantity: 30 },
    ]);
  }
}

describe("StockInventoryComponent", () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;
  let el: DebugElement;
  let service: StockInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockCounterComponent,
        StockProductsComponent,
        StockSelectorComponent,
      ],
      providers: [
        { provide: StockInventoryService, useClass: MockStockInventoryService },
      ],
    });

    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    // Inject Service into component
    service = el.injector.get(StockInventoryService);
  });

  it("should get cartitems and products on init", () => {
    spyOn(service, "getProducts").and.callThrough();
    spyOn(service, "getCartItems").and.callThrough();

    //call life cycle hook from test case
    component.ngOnInit();
    expect(service.getProducts).toHaveBeenCalled();
    expect(service.getCartItems).toHaveBeenCalled();
  });

  it("should create product map from service response", () => {
    component.ngOnInit();
    expect(component.productsMap.get(1)).toEqual({
      id: 1,
      price: 10,
      name: "test",
    });

    expect(component.productsMap.get(2)).toEqual({
      id: 2,
      price: 20,
      name: "test1",
    });
  });

  it("should store products response on ngOninit", () => {
    component.ngOnInit();
    expect(component.products).toEqual([
      { id: 1, price: 10, name: "test" },
      { id: 2, price: 20, name: "test1" },
    ]);
  });

  it("should create stock item for each cart item", () => {
    spyOn(component, "addStock");
    component.ngOnInit();
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 1,
      quantity: 10,
    });
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 2,
      quantity: 30,
    });
  });
});
