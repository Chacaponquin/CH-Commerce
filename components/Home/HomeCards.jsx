import React, { useContext } from "react";
import CarReducerContext from "../../src/context/CarReducerContext";
import Car from "./Car/Car";
import ProductsContainer from "./ProductsCards/ProductsContainer";
import style from "../../styles/home.module.css";

const HomeCards = ({ products }) => {
  const { dispatch, shoppingCar } = useContext(CarReducerContext);

  return (
    <>
      <div id="eCommerce_home_container" className={style.home_container}>
        <ProductsContainer products={products} dispatch={dispatch} />
        <Car dispatch={dispatch} shoppingCar={shoppingCar} />
      </div>
    </>
  );
};

export default HomeCards;
