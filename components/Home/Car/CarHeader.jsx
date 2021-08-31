import React from "react";
import ShoppingCar from "../../svg/ShoppingCar";
import style from "../../../styles/home.module.css";
import { TYPES } from "../../../src/helpers/TYPES";

const CarHeader = ({ shoppingCar, dispatch }) => {
  return (
    <>
      <div className={style.home_car_h1}>
        <div className={style.home_car_h1_container}>
          <h1>Car</h1>
          <ShoppingCar />
        </div>
        {shoppingCar.totalProducts !== 0 && (
          <div className={style.clearCar_section}>
            <input
              type="button"
              value="Clear Car"
              onClick={() => dispatch({ type: TYPES.CLEAR_CAR })}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CarHeader;
