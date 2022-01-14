import { Component, Input } from "@angular/core";
import { PassengerForComponent } from "../../models/passenger.interface";

@Component({
  selector: "passenger-count",
  template: `
    <div>
      Total checked in Passengers : {{ GetCheckInPassengers() }} /
      {{ items?.length }}
    </div>
  `,
})
export class PassengerCountComponent {
  @Input()
  items: PassengerForComponent[];

  GetCheckInPassengers(): number {
    if (!this.items) return;
    return this.items.filter(
      (passenger: PassengerForComponent) => passenger.checkedin
    ).length;
  }
}
