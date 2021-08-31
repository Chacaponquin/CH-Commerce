import { useRouter } from "next/dist/client/router";
import React, { useContext } from "react";
import ProfileContext from "../../src/context/ProfileContext";
import { TYPES } from "../../src/helpers/TYPES";
import style from "../../styles/home.module.css";

const User = ({ profile, dispatch }) => {
  let router = useRouter();
  const { setProfile } = useContext(ProfileContext);

  return (
    <>
      <div id="eCommerce_user_section">
        <div className={style.user_section_partLeft}>
          <img src={`${process.env.API_URL}${profile?.picture}`} alt="" />
        </div>

        <div className={style.user_section_partRight}>
          <div className={style.user_information}>
            <div className={style.user_information_section}>
              <h1>Username</h1>
              <p>{profile?.username}</p>
            </div>
            <div className={style.user_information_section}>
              <h1>E-mail</h1>
              <p>{profile?.email}</p>
            </div>
            <div className={style.user_information_section}>
              <h1>Total Buys</h1>
              <p>{profile?.buys}</p>
            </div>
            <div className={style.user_information_section}>
              <h1>Total Products</h1>
              <p>{profile?.products}</p>
            </div>
            <div className={style.user_information_addProduct}>
              <input
                type="button"
                value="Log Out"
                onClick={() => {
                  localStorage.removeItem("profile");
                  setProfile(null);
                  dispatch({ type: TYPES.CLEAR_CAR });
                }}
              />
              <input
                type="button"
                value="Add Product"
                onClick={() => router.push("/createProduct")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
