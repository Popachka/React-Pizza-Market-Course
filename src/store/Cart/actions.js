export const cartActionsType = {
  ADD_PIZZA: "CART.ADD_PIZZA",
  REMOVE_PIZZA: "CART.REMOVE_PIZZA",
  CLEAR_CART: "CART.CLEAR_CART",
};

export const cartActions = {
  addPizza: (pizzaObj) => ({
    type: cartActionsType.ADD_PIZZA,
    payload: pizzaObj,
  }),
};
