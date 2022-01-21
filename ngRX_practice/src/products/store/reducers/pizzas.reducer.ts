import { at } from "core-js/core/string";
import { Pizza } from "src/products/models/pizza.model";
import * as FromPizzas from "../actions/pizzas.action";

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: FromPizzas.PizzaAction
): PizzaState {
  switch (action.type) {
    case FromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case FromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;
      const entities: any = pizzas.reduce(
        (entitties: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
    case FromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;
