import React, { useEffect } from "react";
import Categories from "../components/Categories";
import Pizza from "../components/Pizza";
import Sort from "../components/Sort";
import { useDispatch } from "react-redux";
import { setSortBy, sortAction } from "../store/Sort/action";
import { categoriesAction } from "../store/Categories/actions";
import { fetchPizzas } from "../store/Pizzas/actions";
import { useSelector } from "react-redux";
import LoadingBlock from "../components/PizzaLoading";
import { cartActions } from "../store/Cart/actions";
function Home(props) {
  const {totalPrice, totalCount} = useSelector ( (cartReducer) => cartReducer)
  const sortItems = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавит", type: "name", order: "asc" },
  ];
  const { index } = useSelector((state) => state.categoriesReducer);
  const { sortBy } = useSelector((state) => state.sortReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas(index, sortBy));
  }, [index, sortBy]);
  const { items, isLoaded } = useSelector((state) => state.pizzasReducer);
  console.log(isLoaded);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
          onClickItem={(type) =>
            dispatch(categoriesAction.typeCategories(type))
          }
        />
        <Sort
          activeSortType={sortBy.type}
          items = {sortItems}
          onClickItem={(type) =>
            dispatch(setSortBy({type}))
          }
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => {
              return <Pizza onClickAddPizza={handleAddPizzaToCart} key={obj.id} {...obj} />;
            })
          : Array(10).fill(<LoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
