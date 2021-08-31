import React from "react";
import style from "../../styles/home.module.css";

const About = () => {
  return (
    <>
      <div id="eCommerce_about_section">
        <div className={style.about_section_partLeft}>
          <div className={style.about_section_text}>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              eum veniam recusandae doloremque. Tempore doloremque voluptatem
              exercitationem aliquid aspernatur esse placeat laboriosam tempora
              at, earum a numquam quidem maxime quod odit iure necessitatibus
              repellendus autem amet maiores? Totam, quibusdam cum a deleniti
              aliquid quasi incidunt iste dolorum dicta accusantium sit unde
              nemo suscipit labore quas ipsa omnis repellat. Obcaecati quaerat
              molestiae maxime eaque numquam. Modi, delectus architecto
              molestiae amet quae officiis nihil id expedita unde placeat
              consectetur voluptatum corporis vitae. Voluptatum ipsam enim
              blanditiis et deleniti suscipit non ad ipsum ut? Ipsum laudantium
              laboriosam molestiae, harum vel doloremque ab necessitatibus.
            </p>
          </div>
        </div>

        <div className={style.about_section_partRight}>
          <img src="./Ch-Commerce-Logo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
