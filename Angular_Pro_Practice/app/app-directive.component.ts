import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <label>
        Credit Card Number
        <input
          name="credit-card"
          type="text"
          placeholder="Enter your 16-digit card number"
          credit-card
        />
      </label>

      <!-- // Using Exposrt as export the directive so we can access the methods in parent compoent, Declare with #name and use it -->
      <label tooltip="3 digits, back of your card" #myTooltip="tooltip">
        Enter your security code
        <span (mouseover)="myTooltip.show()" (mouseout)="myTooltip.hide()">
          (?)
        </span>
        <input type="text" />
      </label>

      <div>
        <ul>
          ************ Using Structural ngFor Directive ************
          <li *ngFor="let item of items; let i = index">
            {{ i }} Member: {{ item.name | json }}
          </li>
          <template ngFor [ngForOf]="items" let-item let-i="index">
            <li>{{ i }} Member: {{ item.name | json }}</li>
          </template>

          *************** Using Custom Directive ************
          <li *myFor="let item of items; let i = index">
            {{ i }} Member: {{ item.name | json }}
          </li>
          <template myFor [myForOf]="items" let-item let-i="index">
            <li>{{ i }} Member: {{ item.name | json }}</li>
          </template>
        </ul>
      </div>
    </div>
  `,
})
export class AppComponent {
  items = [
    {
      name: "Mark Hoppus",
      age: 44,
      location: "California",
    },
    {
      name: "Tom Delonge",
      age: 41,
      location: "California",
    },
    {
      name: "Travis Barker",
      age: 41,
      location: "California",
    },
  ];

  constructor() {
    setTimeout(() => {
      this.items = [...this.items, { name: "Test", age: 20, location: "Pune" }];
    }, 2000);
  }
}
