import { Component } from "@angular/core";

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `<div class="app">
    <nav class="nav">
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        Home
      </a>
      <a routerLink="/oops" routerLinkActive="active"> 404 </a>
    </nav>

    Nav With ngFor
    <nav class="nav">
      <a
        *ngFor="let item of nav"
        [routerLink]="item.link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: item.exact }"
      >
        {{ item.name }}
      </a>
    </nav>
    <router-outlet> </router-outlet>
  </div> `,
})
export class AppComponent {
  nav = [
    {
      link: "/",
      name: "Home",
      exact: true,
    },
    {
      link: "/passengers",
      name: "Passengers",
      exact: true,
    },
    {
      link: "/oops",
      name: "404 - not found",
      exact: true,
    },
  ];
}
