import React from "react";
import { TYPES } from "../../../src/helpers/TYPES";
import style from "../../../styles/home.module.css";

const CarProduct = ({ product, deleteFromCar }) => {
  return (
    <>
      <div className={style.eCommerce_home_car_select} id={product.id}>
        <h1>{product.name}</h1>
        <div className={style.eCommerce_select_delete}>
          <p>X{product.quantity}</p>
          <input
            type="button"
            value="Delete"
            id={product.id}
            onClick={() =>
              deleteFromCar({
                type: TYPES.DELETE_FROM_CAR,
                payload: product.id,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default CarProduct;
