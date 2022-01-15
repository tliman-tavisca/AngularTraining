import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
} from "@angular/core";

// Directive declared with [] using query directive
@Directive({
  selector: "[credit-card]",
})
export class CreditCardDirective {
  //   constructor(private element: ElementRef) {
  //     console.log(element);
  //   }

  // host bindings binds particular property to host i.e. html element
  // allows us to communicated without host node and bind i.e. add or change value of property via HostBinding directive
  @HostBinding("style.border")
  border: string;

  @HostListener("input", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    //console.log(event);

    //Get the html element
    const input = event.target as HTMLInputElement;

    //Get the html element value
    let trimmedValue = input.value.replace(/\s+/g, "");
    console.log(trimmedValue);
    if (trimmedValue.length > 16) {
      trimmedValue = trimmedValue.substring(0, 16);
    }

    let numbers = [];
    for (let index = 0; index < trimmedValue.length; index += 4) {
      numbers.push(trimmedValue.substring(index, 4));
    }

    input.value = numbers.join(" ");

    this.border = "";
    if (/[^\d]+/.test(trimmedValue)) {
      this.border = "1px solid red";
    }
  }
}

// We cannot declare template in directive
// Components extents the directives
