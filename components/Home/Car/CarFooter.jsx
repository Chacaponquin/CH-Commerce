import axios from "axios";
import React, { useContext } from "react";
import style from "../../../styles/home.module.css";
import ProfileContext from "../../../src/context/ProfileContext";
import { TYPES } from "../../../src/helpers/TYPES";

const CarFooter = ({ shoppingCar, dispatch }) => {
  const { profile, setProfile } = useContext(ProfileContext);

  const handlePay = async () => {
    let buys = shoppingCar.products.map((el) => ({
      id: el.id,
      name: el.name,
      quantity: el.quantity,
    }));

    let { data } = await axios.post(`${process.env.API_URL}/updateBuys`, {
      buys: buys,
      profileID: profile.id,
    });

    dispatch({ type: TYPES.CLEAR_CAR });
    setProfile(data.message);
  };

  return (
    <>
      <div className={style.shoppingCar_inf}>
        <h1>Total Price: ${shoppingCar.totalPrice}</h1>
        <h1>Products: {shoppingCar.totalProducts}</h1>
      </div>

      <div className={style.carP_pay_section}>
        <input type="button" value="Pay" onClick={handlePay} />
      </div>
    </>
  );
};

export default CarFooter;
