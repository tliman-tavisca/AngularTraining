import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PassengerForComponent } from "../../models/passenger.interface";

import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count [items]="passengers"> </passenger-count>
      <div *ngFor="let pass of passengers">{{ pass.fullname }}</div>

      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        (view)="handleView($event)"
      ></passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: PassengerForComponent[];

  // Dependency resolved automatically using this
  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
  ) {}

  ngOnInit(): void {
    /* Using Observable -------------------------------------------------------------

    this.passengerService
      .getPassengersAsPromise()
      .subscribe((data: PassengerForComponent[]) => (this.passengers = data));

     -------------------------------------------------------------------------------- */

    // Using Promise
    this.passengerService
      .getPassengersAsPromise()
      .then((data: PassengerForComponent[]) => (this.passengers = data));
  }

  handleRemove(event: PassengerForComponent) {
    this.passengerService.removePassenger(event).subscribe(
      (data: PassengerForComponent) =>
        (this.passengers = this.passengers.filter(
          (passenger: PassengerForComponent) => {
            return passenger.id != event.id;
          }
        ))
    );
  }

  handleEdit(event: PassengerForComponent) {
    this.passengerService.updatePassenger(event).subscribe(
      (data: PassengerForComponent) =>
        (this.passengers = this.passengers.map(
          (passenger: PassengerForComponent) => {
            if (passenger.id === event.id) {
              passenger = Object.assign({}, passenger, event);
            }
            return passenger;
          }
        ))
    );
  }

  handleView(event: PassengerForComponent) {
    this.router.navigate(["/passengers", event.id]);
  }
}
