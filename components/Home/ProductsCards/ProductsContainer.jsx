import React from "react";
import CardHome from "./CardHome";
import style from "../../../styles/home.module.css";

const ProductsContainer = ({ products, dispatch }) => {
  return (
    <>
      <div className={style.eCommerce_home_cards}>
        {products &&
          products.map((el) => (
            <CardHome key={el.id} product={el} addToCar={dispatch} />
          ))}
      </div>
    </>
  );
};

export default ProductsContainer;
