import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers";
import * as fromToppings from "../reducers/toppings.reducer";
import * as fromRoot from "../../../app/store";
import { Topping } from "../../models/topping.model";

// Topings state
export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingsEntities
);

export const getAllToppings = createSelector(
  getToppingsEntities,
  (entities) => {
    return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
  }
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);
export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);

export const getSelectedTopping = createSelector(
  getToppingsEntities,
  fromRoot.getRouterState,
  (entities, router): Topping => {
    return router.state && entities[router.state.params.toppingId];
  }
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  fromToppings.getSelectedToppings
);
