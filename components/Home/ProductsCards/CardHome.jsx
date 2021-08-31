import { useRouter } from "next/dist/client/router";
import React from "react";
import { TYPES } from "../../../src/helpers/TYPES";
import style from "../../../styles/home.module.css";

const CardHome = ({ product, addToCar }) => {
  let router = useRouter();

  return (
    <>
      <div className={style.eCommerce_home_card}>
        <div className={style.home_card_img}>
          <img
            src={`${process.env.API_URL}${product.picture}`}
            alt=""
            onClick={() =>
              router.push(`/product/[productID]`, `/product/${product.id}`)
            }
          />
        </div>
        <div className={style.home_card_options}>
          <h1>{product.name}</h1>
        </div>
        <div className={style.home_card_options}>
          <p>${product.price}</p>
          <input
            type="button"
            value="Add"
            onClick={() => {
              addToCar({
                type: TYPES.ADD_TO_CAR,
                payload: {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                },
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CardHome;
