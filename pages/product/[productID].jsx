import React, { useContext, useEffect, useState } from "react";
import LeftArrow from "../../components/svg/LeftArrow";
import style from "../../styles/product.module.css";
import CarReducerContext from "../../src/context/CarReducerContext";
import { TYPES } from "../../src/helpers/TYPES";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import StarRatings from "react-star-ratings";
import ProfileContext from "../../src/context/ProfileContext";
import Head from "next/head";
import Loading from "../../components/Loading/Loading";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { dispatch } = useContext(CarReducerContext);
  const { profile } = useContext(ProfileContext);
  let router = useRouter();

  useEffect(() => {
    if (!profile) {
      router.replace("/login");
    }
  }, []);

  if (!product) {
    return <Loading />;
  }

  const changeRating = async (rating) => {
    let { data } = await axios.post(`${process.env.API_URL}/updateRating`, {
      profileID: profile.id,
      productID: product._id,
      rating: rating,
    });
  };

  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <div className={style.productInfContainer}>
        <div className={style.eCommerce_product_container}>
          <div className={style.eCommerce_product_card}>
            <div className={style.eCommerce_product_back}>
              <LeftArrow width={40} height={40} />
              <p>Back to Home</p>
            </div>
            <div className={style.eCommerce_product_card_inf}>
              <div className={style.product_cardPartLeft}>
                <img src={`${process.env.API_URL}${product.picture}`} alt="" />
              </div>
              <div className={style.product_cardPartRight}>
                <div className={style.product_card_information}>
                  <div className={style.product_rating_name}>
                    <h1>{product.name}</h1>
                    <p>{product.rating}</p>
                  </div>
                  <div className={style.product_price_rating}>
                    <p>${product.price}</p>
                    <StarRatings
                      rating={0}
                      numberOfStars={5}
                      name="rating"
                      changeRating={changeRating}
                      starRatedColor="#55efc4"
                      starEmptyColor={"gray"}
                      starHoverColor={"#55efc4"}
                      starDimension={window.innerWidth <= 300 ? "30px" : "40px"}
                      isAggregateRating={true}
                    />
                  </div>
                  <p className={style.product_card_description}>
                    {product.description}
                  </p>
                  <div className={style.product_card_buttons}>
                    <input
                      type="button"
                      value="Add to Card"
                      onClick={() => {
                        dispatch({
                          type: TYPES.ADD_TO_CAR,
                          payload: {
                            id: product._id,
                            name: product.name,
                            price: product.price,
                            quantity: quantity,
                          },
                        });
                        router.push("/home");
                      }}
                    />
                    <div className={style.product_button_addMore}>
                      <input
                        type="button"
                        value="+"
                        onClick={() => setQuantity(quantity + 1)}
                      />
                      <div>{quantity}</div>
                      <input
                        type="button"
                        value="-"
                        onClick={() => {
                          if (quantity === 0) {
                            return;
                          }
                          setQuantity(quantity - 1);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let { productID } = context.params;

  let { data } = await axios.get(
    `${process.env.API_URL}/getProduct/${productID}`
  );

  if (data.message) {
    return { props: { product: data.message } };
  }

  if (data.error) {
    return {
      notFound: true,
    };
  }
}

export default Product;
