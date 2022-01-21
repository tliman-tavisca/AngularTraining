import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { map, catchError, switchMap } from "rxjs/operators";
import { Effect, Actions } from "@ngrx/effects";

import * as toppingsActions from "../actions/toppings.action";
import * as fromServices from "../../services/toppings.service";

@Injectable()
export class ToppingsEffect {
  constructor(
    private action$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.action$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map((toppings) => new toppingsActions.LoadToppingsSuccess(toppings)),
        catchError((error) => of(new toppingsActions.LoadToppingsFail(error)))
      );
    })
  );
}
