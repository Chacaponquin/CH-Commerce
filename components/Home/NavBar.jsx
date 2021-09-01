import React from "react";
import style from "../../styles/home.module.css";

const NavBar = () => {
  return (
    <>
      <div className={style.eCommerceNavBar}>
        <div className={style.eCommerce_navBar_options}>
          <a href="#eCommerce_home_container" className={style.navBar_option}>
            Home
          </a>
          <a href="#eCommerce_user_section" className={style.navBar_option}>
            User
          </a>
          <a href="#eCommerce_about_section" className={style.navBar_option}>
            About
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
