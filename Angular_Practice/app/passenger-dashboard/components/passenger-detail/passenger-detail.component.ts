import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

import { PassengerForComponent } from "../../models/passenger.interface";

@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
      Passenger Details :
      <span
        class="status"
        [style.backgroundColor]="detail.checkedin ? 'green' : 'red'"
      ></span>

      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChanged(name.value)"
          #name
        />
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>

      <p>{{ detail | json }}</p>
      <div class="date">
        Checkedin date:{{
          detail.checkedInDate
            ? (detail.checkedInDate | date: "yMMMMd" | uppercase)
            : "Not checked in"
        }}
      </div>

      <button (click)="toggeleEditing()">
        {{ editing ? "Done" : "Edit" }}
      </button>

      <button (click)="onRemove()">Remove</button>

      <button (click)="goToView()">View</button>
    </div>
  `,
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: PassengerForComponent;

  @Output()
  remove: EventEmitter<PassengerForComponent> = new EventEmitter<PassengerForComponent>();

  @Output()
  edit: EventEmitter<PassengerForComponent> = new EventEmitter<PassengerForComponent>();

  @Output()
  view: EventEmitter<PassengerForComponent> = new EventEmitter<PassengerForComponent>();

  editing: boolean = false;

  constructor() {}

  onNameChanged(name: string) {
    this.detail.fullname = name;
  }
  toggeleEditing() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  ngOnChanges(changes): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  goToView() {
    this.view.emit(this.detail);
  }
}
