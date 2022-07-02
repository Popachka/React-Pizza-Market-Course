import { pizzasActionsType } from "./actions";

const initialState = {
  items: [],
  isLoaded: false
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case pizzasActionsType.SET_PIZZAS:
      return { ...state , items : action.payload, isLoaded: true};
    case pizzasActionsType.IS_LOADED:
      return {...state, isLoaded: action.payload}
    default:
      return state;
  }
};
