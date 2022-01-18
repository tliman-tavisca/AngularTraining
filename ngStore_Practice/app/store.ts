import { State } from "./state";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/observable";

import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/pluck";

const state: State = {
  playlist: undefined,
};

export class Store {
  // Use BehaviorSubject to create initial value also it pass last value to any subscribers
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value,
      [name]: state,
    });
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }
}
