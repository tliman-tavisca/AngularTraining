import * as FromPizzas from "./pizzas.reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

export interface ProductState {
  pizzas: FromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: FromPizzas.reducer,
};

// declare Selector
export const getProductsState = createFeatureSelector<ProductState>("products");

// pizza state
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  FromPizzas.getPizzasEntities
);
export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  FromPizzas.getPizzasLoaded
);
export const getAllPizzasLoading = createSelector(
  getPizzaState,
  FromPizzas.getPizzasLoading
);

export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
});
