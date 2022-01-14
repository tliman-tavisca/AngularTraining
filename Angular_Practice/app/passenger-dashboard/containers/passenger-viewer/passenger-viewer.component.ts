import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { PassengerForComponent } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
    <div>
      <button (click)="goBack()">Go Back</button>
      <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `,
})
export class PassengerViewerComponent implements OnInit {
  passenger: PassengerForComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerDashboardService: PassengerDashboardService
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((data: PassengerForComponent) =>
        this.passengerDashboardService.getPassenger(data.id)
      )
      .subscribe((data: PassengerForComponent) => (this.passenger = data));
    //this.passengerDashboardService.getPassenger(1);
  }

  onUpdatePassenger(event: PassengerForComponent) {
    this.passengerDashboardService
      .updatePassenger(event)
      .subscribe(
        (data: PassengerForComponent) =>
          (this.passenger = Object.assign({}, this.passenger, data))
      );
  }

  goBack() {
    this.router.navigate(["/passengers"]);
  }
}
