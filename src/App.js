import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Carts from "./pages/Carts";
import Home from "./pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pizzasActions } from "./store/Pizzas/actions";

function App() {
  const dispatch = useDispatch();
  const {items} = useSelector((state) => state.pizzasReducer)
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items = {items}/>} />
            <Route path="carts" element={<Carts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
