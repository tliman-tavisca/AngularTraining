import { Component, OnInit } from "@angular/core";

import { PassengerForComponent } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
    <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)">
    </passenger-form>
  `,
})
export class PassengerViewerComponent implements OnInit {
  passenger: PassengerForComponent;

  constructor(private passengerDashboardService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengerDashboardService
      .getPassenger(1)
      .subscribe((data: PassengerForComponent) => (this.passenger = data));
  }

  onUpdatePassenger(event: PassengerForComponent) {
    this.passengerDashboardService
      .updatePassenger(event)
      .subscribe(
        (data: PassengerForComponent) =>
          (this.passenger = Object.assign({}, this.passenger, data))
      );
  }
}
