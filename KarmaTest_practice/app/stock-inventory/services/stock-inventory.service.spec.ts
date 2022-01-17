import { TestBed } from "@angular/core/testing";
import {
  platformBrowserDynamicTesting,
  BrowserDynamicTestingModule,
} from "@angular/platform-browser-dynamic/testing";

import { StockInventoryService } from "./stock-inventory.service";
import { Observable } from "rxjs";
import { ResponseOptions, Response, Http } from "@angular/http";

import "rxjs/add/observable/of";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

function createRespone(body) {
  return Observable.of(
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  );
}

class MockHttp {
  get() {
    return createRespone([]);
  }
}

const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 30 },
];

const productItems = [
  { id: 1, price: 10, name: "test" },
  { id: 2, price: 20, name: "test1" },
];

describe("StockInventoryService", () => {
  let serivce: StockInventoryService;
  let http: Http;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [StockInventoryService, { provide: Http, useClass: MockHttp }],
    });
    http = bed.get(Http);
    serivce = bed.get(StockInventoryService);
  });

  it("should get cart items", () => {
    spyOn(http, "get").and.returnValue(createRespone([...cartItems]));

    serivce.getCartItems().subscribe((result) => {
      expect(result.length).toBe(2);
      expect(result).toEqual(cartItems);
    });
  });

  it("should get product items", () => {
    spyOn(http, "get").and.returnValue(createRespone([...productItems]));

    serivce.getProducts().subscribe((result) => {
      expect(result.length).toBe(2);
      expect(result).toEqual(productItems);
    });
  });
});
