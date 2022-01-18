import { Component } from "@angular/core";

import { Store } from "./store";

@Component({
  selector: "app-root",
  template: `
    <div>
      <div *ngFor="let todo of todos$ | async">
        <div>
          <div>
            <h2>{{ todo.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  todos$ = this.store.select<any[]>("todolist");

  constructor(private store: Store) {
    // console.log(store);
    this.store.set("todolist", [
      { id: 1, name: "Coding" },
      { id: 2, name: "Testing" },
    ]);
  }
}
