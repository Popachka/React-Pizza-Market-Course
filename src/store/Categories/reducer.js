import { categoriesAction, categoriesActionType } from "./actions";

const initialState = {
  status: null,
  type: null,
  index: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoriesActionType.CHANGE_CATEGORIES:
      return { ...state, status: action.payload, index: action.payload };
    case categoriesActionType.TYPE_CATEGORIES:
      return { ...state, type: action.payload };
    case categoriesActionType.INDEX_CATEGORIES:
      return { ...state, index: action.payload };
    default:
      return state;
  }
};
