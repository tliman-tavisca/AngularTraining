import { Action } from "@ngrx/store";
import { type } from "os";
import { Pizza } from "src/products/models/pizza.model";

//Load Pizzas : Action Constants
export const LOAD_PIZZAS = "[Pizzas] Load Pizzas";
export const LOAD_PIZZAS_FAIL = "[Pizzas] Load Pizzas Fail";
export const LOAD_PIZZAS_SUCCESS = "[Pizzas] Load Pizzas Success";

// ACtion creators
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// Action types
export type PizzaAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
