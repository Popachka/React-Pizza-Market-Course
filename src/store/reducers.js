
import { combineReducers } from 'redux';
import { pizzasReducer } from './Pizzas/reducer';
import { categoriesReducer } from './Categories/reducer';
import { sortReducer } from './Sort/reducer';
import cart from './Cart/reducer';



export const reducers = combineReducers({
    pizzasReducer,
    categoriesReducer,
    sortReducer,
    cart
})