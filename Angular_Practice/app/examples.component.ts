import { Component } from "@angular/core";

/* ----------------------- PropertyBindingComponent ------------------------------------ */

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      //With Sugar syntax :
      <h1>{{ title + "!" }}</h1>

      Property Binding :
      <h1 [innerHTML]="title"></h1>

      Property Binding with Value : It is one way data binding -->
      <input type="text" [value]="name" />
      <h1 [innerHTML]="title"></h1>

      <img [src]="logo" />

      <div>
        {{ numberOne }}
        {{ numbertwo }}
      </div>
      <div>
        {{ numberOne + numbertwo }}
      </div>
      <div>
        {{ ishappy ? "yay" : "ohhh" }}
      </div>
    </div>
  `,
})
export class PropertyBindingComponent {
  title: string;
  name: string = "PropetyBinding";
  numberOne: number = 1;
  numbertwo: number = 2;
  ishappy: boolean = true;
  logo: string = "img/logo.svg";
  constructor() {
    this.title = "First component";
  }
}

/* ----------------------- EventBindingComponent ------------------------------------ */

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <button (click)="handleclick()">Change name</button>
      <input
        type="text"
        [value]="name"
        (blur)="handleBlur($event)"
        (input)="handleInput($event)"
      />
      {{ name }}
    </div>
  `,
})
export class EventBindingComponent {
  name: string = "PropetyBinding";
  handleBlur(event: any) {
    this.name = event.target.value;
  }
  handleInput(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleclick() {
    this.name = "New name";
  }
}

/* ----------------------- TwowayDatabindingComponent ------------------------------------ */

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <button (click)="handleclick()">Change name</button>
      {{ name }}
      <div>
        Two way databiding with ngModelChange example:
        <input
          type="text"
          [ngModel]="name"
          (ngModelChange)="handleChange($event)"
        />

        <div>
          Two way databiding with combination :

          <input
            type="text"
            [ngModel]="name"
            (ngModelChange)="handleChange($event)"
          />
        </div>
      </div>
    </div>
  `,
})
export class TwowayDatabindingComponent {
  name: string = "PropetyBinding";

  handleChange(value: string) {
    this.name = value;
  }

  handleclick() {
    this.name = "New name";
  }
}

/* ----------------------- TemplateRef ------------------------------------ */
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <button (click)="handleclick(username.value)">Get Value</button>
      {{ name }}
      <div>
        Template ref example: we can refer to DOM element to use anywhere to get
        it
        <input type="text" #username />
      </div>
    </div>
  `,
})
export class AppComponent {
  name: string = "PropetyBinding";

  handleclick(name: string) {
    this.name = name;
  }
}

/* -----------------------  NgIf Directive Example   ------------------------------------ */
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <div>
        NgIf Directive Example
        <input
          type="text"
          [value]="name"
          (input)="handleinput($event.target.value)"
        />
      </div>
      <H1>With *ngIf Directive as Sugar syntax</H1>
      <div *ngIf="name.length > 3">Seaching for .. {{ name }}</div>

      <H1>With *ngIf Directive as template syntax</H1>
      <template [ngIf]="name.length">
        <div>Seaching for .. {{ name }}</div>
      </template>
    </div>
  `,
})
export class NgIfDirectiveExampleComponent {
  name: string = "";

  handleinput(name: string) {
    this.name = name;
  }
}

/* ----------------------- ngFor and iterating collections    ------------------------------------ */

interface Passenger {
  id: number;
  fullname: string;
  checkedin: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      Airline Passengers with Template Sytanx:
      <ul>
        <template ngFor let-passenger [ngForOf]="passengers" let-i="index">
          <li>{{ i }}: {{ passenger.fullname }}</li>
        </template>
      </ul>
    </div>
    <div>
      Airline Passengers : {{ passengers.length }}
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `,
})
export class ngForAppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedin: true,
    },
    {
      id: 2,
      fullname: "Bob",
      checkedin: true,
    },
    {
      id: 3,
      fullname: "ROd",
      checkedin: true,
    },
    {
      id: 4,
      fullname: "Test",
      checkedin: true,
    },
    {
      id: 5,
      fullname: "Neil",
      checkedin: true,
    },
  ];
}

/* -----------------------   NgClass  ------------------------------------ */
interface PassengerForNgClass {
  id: number;
  fullname: string;
  checkedin: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      Airline Passengers : {{ passengers.length }}
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedin"></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>

    <div>
      Airline Passengers with ngClass:
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedin,
              'checked-out': !passenger.checkedin
            }"
          ></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `,
})
export class NgClassAppComponent {
  passengers: PassengerForNgClass[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedin: true,
    },
    {
      id: 2,
      fullname: "Bob",
      checkedin: false,
    },
    {
      id: 3,
      fullname: "Rod",
      checkedin: true,
    },
    {
      id: 4,
      fullname: "Test",
      checkedin: false,
    },
    {
      id: 5,
      fullname: "Neil",
      checkedin: true,
    },
  ];
}

/* -----------------------   ngStyle and style bindings  ------------------------------------ */
interface PassengerForNgStyle {
  id: number;
  fullname: string;
  checkedin: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      Airline Passengers : {{ passengers.length }}
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [style.backgroundColor]="passenger.checkedin ? 'green' : 'red'"
          ></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>

    <div>
      Airline Passengers with ngClass:
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [ngStyle]="{
              backgroundColor: passenger.checkedin ? 'green' : 'red'
            }"
          >
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `,
})
export class ngStyleAppComponent {
  passengers: PassengerForNgStyle[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedin: true,
    },
    {
      id: 2,
      fullname: "Bob",
      checkedin: false,
    },
    {
      id: 3,
      fullname: "Rod",
      checkedin: true,
    },
    {
      id: 4,
      fullname: "Test",
      checkedin: false,
    },
    {
      id: 5,
      fullname: "Neil",
      checkedin: true,
    },
  ];
}

/* -----------------------  Pipes for data transformation   ------------------------------------ */

interface PassengerForPipes {
  id: number;
  fullname: string;
  checkedin: boolean;
  checkedInDate?: number;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      Airline Passengers : {{ passengers.length }}
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [style.backgroundColor]="passenger.checkedin ? 'green' : 'red'"
          ></span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="checked-date">
            Checkedin date:{{
              passenger.checkedInDate
                ? (passenger.checkedInDate | date: "yMMMMd" | uppercase)
                : "Not checked in"
            }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class PipesAppComponent {
  passengers: PassengerForPipes[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedin: true,
      checkedInDate: 14907400000,
    },
    {
      id: 2,
      fullname: "Bob",
      checkedin: false,
    },
    {
      id: 3,
      fullname: "Rod",
      checkedin: true,
      checkedInDate: 14907400000,
    },
    {
      id: 4,
      fullname: "Test",
      checkedin: false,
    },
    {
      id: 5,
      fullname: "Neil",
      checkedin: true,
      checkedInDate: 14907400000,
    },
  ];
}

/* -----------------------  Safe navigation operator   ------------------------------------ */
interface PassengerForSafeOperator {
  id: number;
  fullname: string;
  checkedin: boolean;
  checkedInDate?: number;
  children: Child[] | null;
}

interface Child {
  name: string;
  age: number;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <passenger-dashboard></passenger-dashboard>
    </div>
  `,
})
export class SafeNavOperatorAppComponent {
  passengers: PassengerForSafeOperator[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedin: true,
      checkedInDate: 14907400000,
      children: null,
    },
    {
      id: 2,
      fullname: "Bob",
      checkedin: false,
      children: [{ name: "child1", age: 5 }],
    },
    {
      id: 3,
      fullname: "Rod",
      checkedin: true,
      checkedInDate: 14907400000,
      children: [
        { name: "child1", age: 2 },
        { name: "child2", age: 3 },
      ],
    },
    {
      id: 4,
      fullname: "Test",
      checkedin: false,
      children: null,
    },
    {
      id: 5,
      fullname: "Neil",
      checkedin: true,
      checkedInDate: 14907400000,
      children: null,
    },
  ];
}

/* -----------------------  Feature modules with @NgModule   ------------------------------------ */
// added new module file

/***************************************************
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

@NgModule({
  declarations: [PassengerDashboardComponent],
  imports: [CommonModule],
  exports: [PassengerDashboardComponent],
})
export class PassengerDashboardModule {}

***********************************************************************
// Step 2 : import that module in app.module
/************************************************
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // nagular modules
    BrowserModule,
    FormsModule,
    CommonModule,
    // custom modules
    PassengerDashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
*********************************************************/

/* -----------------------  Creating a container (smart) component   ------------------------------------ */
/* new component created in passenger dashboard and imported the same */

/* ----------------------- ngOnInit lifecycle hook    ------------------------------------ */

/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
/* -----------------------     ------------------------------------ */
