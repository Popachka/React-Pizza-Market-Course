import { sortActionType } from "./action";
const initialState = {
  sortBy: {
    type: "popular",
    order: "desc",
  },
};
export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case sortActionType.TYPE_SORT:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};
