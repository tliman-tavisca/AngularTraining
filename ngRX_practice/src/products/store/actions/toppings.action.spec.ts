import * as fromPizzas from "../actions";

describe("Toppings Actions", () => {
  describe("Load Toppings Actions", () => {
    describe("Load Toppings", () => {
      it("should create an action", () => {
        const action = new fromPizzas.LoadToppings();

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_TOPPINGS,
        });
      });

      describe("Load Toppings Fail", () => {
        it("should create an action", () => {
          const payload = { error: "Failed" };
          const action = new fromPizzas.LoadToppingsFail(payload);

          expect({ ...action }).toEqual({
            type: fromPizzas.LOAD_TOPPINGS_FAIL,
            payload,
          });
        });

        describe("Load Toppings Success", () => {
          it("should create an action", () => {
            const payload = [{ id: 1, name: "onion" }];
            const action = new fromPizzas.LoadToppingsSuccess(payload);

            expect({ ...action }).toEqual({
              type: fromPizzas.LOAD_TOPPINGS_SUCCESS,
              payload,
            });
          });
        });
      });
    });
  });
});
