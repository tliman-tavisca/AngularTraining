import { Input, Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[tooltip]",
  // Using Exposrt as export the directive so we can access the methods in parent compoent, Declare with #name and use it
  exportAs: "tooltip",
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement("div");
  visible = false;

  @Input()
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove("tooltip--active");
  }

  show() {
    this.tooltipElement.classList.add("tooltip--active");
  }

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.tooltipElement.className = "tooltip";
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add("tooltip-container");
  }
}
