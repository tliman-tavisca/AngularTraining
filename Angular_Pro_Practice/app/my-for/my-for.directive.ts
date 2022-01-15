import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

// create custom directive
@Directive({
  selector: "[myFor][myForOf]",
})
export class MyForDirective {
  @Input()
  set myForOf(collection) {
    this.view.clear();
    collection.forEach((element, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: element,
        index: index,
      });
    });
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
}
