import * as fromPizzas from "../actions";

describe("Pizzas Actions", () => {
  describe("Load Pizzas Actions", () => {
    describe("Load Pizzas", () => {
      it("should create an action", () => {
        const action = new fromPizzas.LoadPizzas();

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS,
        });
      });

      describe("Load Pizzas Fail", () => {
        it("should create an action", () => {
          const payload = { error: "Failed" };
          const action = new fromPizzas.LoadPizzasFail(payload);

          expect({ ...action }).toEqual({
            type: fromPizzas.LOAD_PIZZAS_FAIL,
            payload,
          });
        });

        describe("Load Pizzas Success", () => {
          it("should create an action", () => {
            const payload = [{ id: 1, name: "onion" }];
            const action = new fromPizzas.LoadPizzasSuccess(payload);

            expect({ ...action }).toEqual({
              type: fromPizzas.LOAD_PIZZAS_SUCCESS,
              payload,
            });
          });
        });
      });
    });
  });
});
