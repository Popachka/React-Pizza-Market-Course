import axios from "axios";

export const pizzasActionsType = {
    SET_PIZZAS: 'PIZZAS.SET_PIZZAS',
    IS_LOADED: 'PIZZAS.IS_LOADED'
}

export const pizzasActions = {
    setPizzas: (payload) => ({type: pizzasActionsType.SET_PIZZAS, payload}) ,
    isLoaded: (payload) => ({type: pizzasActionsType.IS_LOADED, payload})
}

export const fetchPizzas = (category,sortBy) => (dispatch) => {
    
    dispatch(pizzasActions.isLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ``
}&_sort=${sortBy.type}&_order=desc`).then(({ data }) => {
        dispatch(pizzasActions.setPizzas(data));
      });
}