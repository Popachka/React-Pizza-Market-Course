import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { categoriesAction } from "../store/Categories/actions";
import { useSelector } from 'react-redux';


function Categories({items, onClickItem}) {
  const dispatch = useDispatch()
  const {status} = useSelector( (state) => state.categoriesReducer)
  const handleClickItem = (index,type) => {
    dispatch(categoriesAction.changeCategories(index))
    onClickItem(type)
  }
  return (
    <div className="categories">
      <ul>
        <li className={status === null ? 'active': ''} onClick = {() => dispatch(categoriesAction.changeCategories(null))}>Все</li>
        {items &&
            items.map( (name, index) => {
                return <li key={`${name}__${index}`} className = {status === index ? 'active' : ''}
                onClick = {() =>  handleClickItem(index,name) }
            >{name}</li>
            })
        }
      </ul>
    </div>
  );
}

Categories.propTypes = {
    items: PropTypes.array,
    onClickItem: PropTypes.func
};

export default Categories;
