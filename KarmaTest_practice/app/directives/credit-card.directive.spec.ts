import { DebugElement, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";
import { By } from "@angular/platform-browser";
import { CreditCardDirective } from "./credit-card.directive";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

@Component({
  template: ` <input type="text" [value]="value" credit-card /> `,
})
class TestComponent {
  value = 12455;
}

describe("CreditCardDirective", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it("should format input with spaces", () => {
    // get i.e. query directive using By.directive same like by.Css
    const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
    directive.value = "565644";

    // dispatch input event on directive
    directive.dispatchEvent(new Event("input"));
    expect(directive.value).toBe("5656 44");

    directive.value = "4564654466612222";
    directive.dispatchEvent(new Event("input"));
    expect(directive.value).toBe("4564 6544 6661 2222");
  });

  it("should have maxlength of 16 characters", () => {
    // get i.e. query directive using By.directive same like by.Css
    const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
    directive.value = "4564654466612222394282394823";
    directive.dispatchEvent(new Event("input"));
    expect(directive.value).toBe("4564 6544 6661 2222");
  });
});
