import React from "react";
import CarFooter from "./CarFooter";
import CarHeader from "./CarHeader";
import CarProduct from "./CarProduct";
import style from "../../../styles/home.module.css";

const Car = ({ dispatch, shoppingCar }) => {
  return (
    <>
      <div className={style.eCommerce_home_car}>
        <CarHeader shoppingCar={shoppingCar} dispatch={dispatch} />
        {shoppingCar.totalProducts !== 0 &&
          shoppingCar.products.map((product) => (
            <CarProduct
              key={product.id}
              product={product}
              deleteFromCar={dispatch}
            />
          ))}
        {shoppingCar.totalProducts !== 0 && (
          <CarFooter shoppingCar={shoppingCar} dispatch={dispatch} />
        )}
      </div>
    </>
  );
};

export default Car;
