import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PassengerForComponent } from "../../models/passenger.interface";

import { Baggege } from "../../models/baggage.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: ` <form
    (ngSubmit)="handleSubmit(form.value, form.valid)"
    #form="ngForm"
    novalidate
  >
    <div>
      Passenger Id:
      <input
        type="number"
        name="id"
        required
        [ngModel]="detail?.id"
        #id="ngModel"
      />
      <div *ngIf="id.errors?.required && id.touched" class="error">
        Passenger Id is required
      </div>
    </div>
    <div>
      Passenger Name:
      <input
        type="text"
        name="fullname"
        required
        minlength="3"
        [ngModel]="detail?.fullname"
        #fullname="ngModel"
      />
      <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
        Passenger Name is required
      </div>
      <div *ngIf="fullname.errors?.minlength && fullname.dirty" class="error">
        Passenger Name minimum lenth is 3
      </div>
    </div>
    <div>
      Checked in as Radio Button:
      <label
        ><input
          type="radio"
          name="checkedin"
          [value]="true"
          [ngModel]="detail?.checkedin"
          (ngModelChange)="toggeleCheckedin($event)"
        />
        Yes
      </label>
      <label
        ><input
          type="radio"
          name="checkedin"
          [value]="false"
          [ngModel]="detail?.checkedin"
          (ngModelChange)="toggeleCheckedin($event)"
        />
        No
      </label>
    </div>

    <div>
      Checked in As CheckBox:
      <label
        ><input
          type="checkbox"
          name="checkedin"
          [ngModel]="detail?.checkedin"
          (ngModelChange)="toggeleCheckedin($event)"
        />
        Yes
      </label>
    </div>

    <div *ngIf="form.value.checkedin">
      Check in date:
      <input
        type="number"
        name="checkedInDate"
        [ngModel]="detail?.checkedInDate"
      />
    </div>

    <div>
      Luggaege (using Selected):
      <select name="baggage" [ngModel]="detail?.baggage">
        <option
          *ngFor="let item of baggage"
          [value]="item.key"
          [selected]="item.key === detail?.baggage"
        >
          {{ item.value }}
        </option>
      </select>
    </div>

    <div>
      Luggaege using ngValue:
      <select name="baggage" [ngModel]="detail?.baggage">
        <option *ngFor="let item of baggage" [ngValue]="item.key">
          {{ item.value }}
        </option>
      </select>
    </div>

    <div>
      <button type="submit" [disabled]="form.invalid">Update Customer</button>
    </div>
  </form>`,
})
export class PassengerFormComponent {
  @Input()
  detail: PassengerForComponent;

  @Output()
  update: EventEmitter<PassengerForComponent> = new EventEmitter();

  baggage: Baggege[] = [
    { key: "nope", value: "No baggage" },
    { key: "hand-only", value: "Hand baggage" },
    { key: "hold-only", value: "Hold baggage" },
    { key: "hold-hand", value: "Hold and Hand baggage" },
  ];

  constructor() {}
  toggeleCheckedin(checkedin: boolean) {
    if (checkedin) {
      this.detail.checkedInDate = Date.now();
    }
  }

  handleSubmit(passenger: PassengerForComponent, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
