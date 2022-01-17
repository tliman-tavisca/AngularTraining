import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

import { StockCounterComponent } from "./stock-counter.component";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("StockCounterComponent", () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent],
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;

    component.value = 0;
  });

  it("should increment correctly", () => {
    component.increment();
    expect(component.value).toBe(1);
  });

  it("should decrement correctly", () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it("should not decrement below the minimum value", () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it("should not increment below the maximum value", () => {
    for (let i = 0; i < 200; i++) {
      component.increment();
    }
    expect(component.value).toBe(100);
  });

  it("should not increment over the maximum value", () => {
    component.step = 20;
    component.max = 20;
    component.increment();
    component.increment();
    expect(component.value).toBe(20);
  });

  it("should call the output on a value change", () => {
    // To test output i.e. Emitter
    spyOn(component.changed, "emit").and.callThrough();
    component.step = 100;
    component.increment();
    // to check emit called with using toHaveBeenCalledWith
    expect(component.changed.emit).toHaveBeenCalledWith(100);
  });
});

describe("StockCounterComponent With Component Templates", () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent],
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    component.value = 0;
  });

  it("should increment when + button is click", () => {
    // Test with selecting dom
    el.query(By.css("button:first-child")).triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.value).toBe(1);
    // Check on UI i.e. We can test DOM
    expect(el.query(By.css("p")).nativeElement.textContent).toBe("1");
  });

  it("should increment value when up arrow pressed", () => {
    const event = new Event("KeyboardEvent") as any;
    event.code = "ArrowUp";
    // Test keyboard event pressed and component changed
    el.query(By.css(".stock-counter > div > div")).triggerEventHandler(
      "keydown",
      event
    );
    fixture.detectChanges();
    expect(component.value).toBe(1);
  });
});
