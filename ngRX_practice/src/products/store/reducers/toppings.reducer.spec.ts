import * as fromToppings from "./toppings.reducer";
import * as fromActions from "../actions/toppings.action";
import { Topping } from "../../models/topping.model";

describe("Topping Reducer", () => {
  describe("undefined action", () => {
    it("should return default state", () => {
      const { initialState } = fromToppings;
      const action = {} as any;
      const state = fromToppings.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe("Load Toppings action", () => {
    it("Should set loading as true", () => {
      const { initialState } = fromToppings;
      const action = new fromActions.LoadToppings();
      const state = fromToppings.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe("Load Toppings success action", () => {
    it("Should populate toppings array", () => {
      const toppings: Topping[] = [
        { id: 1, name: "bacon" },
        { id: 2, name: "pepperoni" },
        { id: 3, name: "tomato" },
      ];
      const entities = {
        1: toppings[0],
        2: toppings[1],
        3: toppings[2],
      };
      const { initialState } = fromToppings;
      const action = new fromActions.LoadToppingsSuccess(toppings);
      const state = fromToppings.reducer(initialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });

  describe("Load Toppings Fail action", () => {
    it("Should return the initial state", () => {
      const { initialState } = fromToppings;
      const action = new fromActions.LoadToppingsFail({});
      const state = fromToppings.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });
    it("should return previoius state", () => {
      const { initialState } = fromToppings;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.LoadToppingsFail({});
      const state = fromToppings.reducer(previousState, action);
      expect(state).toEqual(initialState);
    });
  });

  describe("Visualize toppings action", () => {
    it("should set array of number ids", () => {
      const { initialState } = fromToppings;
      const action = new fromActions.VisualiseToppings([1, 5, 9]);
      const state = fromToppings.reducer(initialState, action);

      expect(state.selectedToppings).toEqual([1, 5, 9]);
    });
  });
});

describe("Pizza Reducer Selectors", () => {
  describe("getSelectedToppings", () => {
    it("should return .entities", () => {
      const entities: { [key: number]: Topping } = {
        1: { id: 1, name: "bacon" },
        2: { id: 2, name: "pepperoni" },
      };
      const { initialState } = fromToppings;
      const previousState = { ...initialState, entities };
      const slice = fromToppings.getToppingsEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe("getSelectedToppings", () => {
    it("should return .selectedToppings", () => {
      const selectedToppings = [1, 2, 3, 4, 5];
      const { initialState } = fromToppings;
      const previousState = { ...initialState, selectedToppings };
      const slice = fromToppings.getSelectedToppings(previousState);

      expect(slice).toEqual(selectedToppings);
    });
  });

  describe("getToppingsLoading", () => {
    it("should return .loading", () => {
      const { initialState } = fromToppings;
      const previousState = { ...initialState, loading: true };
      const slice = fromToppings.getToppingsLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe("getToppingsLoaded", () => {
    it("should return .loaded", () => {
      const { initialState } = fromToppings;
      const previousState = { ...initialState, loaded: true };
      const slice = fromToppings.getToppingsLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe("getSelectedToppings", () => {
    it("should return .selectedToppings", () => {
      const { initialState } = fromToppings;
      const previousState = { ...initialState };
      const slice = fromToppings.getSelectedToppings(previousState);

      expect(slice).toEqual([]);
    });
  });
});
