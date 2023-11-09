import React from "react";
import style from "@/styles/AboutUs.module.css";
import Heading from "@/components/Heading";
import { kadwa } from "@/utils/font";

function aboutUs() {
  return (
    <div className={style.contaner}>
      <Heading head="About Us" />

      <div
        style={{
          margin: "auto",
          textAlign: "center",
          position: "relative",
          marginTop: "15px",
        }}
      >
        <img
          src="/image/banner.jpg"
          alt="govind hand print akola"
          className={style.img}
        />
        <div className={style.fade}></div>
      </div>

      <div className={`${kadwa.className} ${style.para}`}>
        Our family has been doing Dabu print (also known as resist mud block
        printing) for more than 100 years. This is our ancestral art, which is
        passed from generation to generation. We are located in Akola village,
        which is known for its Dabu print around the world. We belong to the
        Chippa community, which is known for traditional printing on the cloth.
      </div>

      <div className={`${kadwa.className} ${style.para}`}>
        Our work shop is located in Jawahar Nagar, near the middle school in
        Akola. The work shop has the capacity to produce 15 thousand metres of
        fabric per month. We have 22 skilled artisans. We print on the
        best-quality cotton and silk fabric or according to client requirements.
        We mostly used natural colours for our printing. We sell our fabric in
        Delhi, Chennai, Mumbai, Jaipur, Bangalore, Hyderabad, and Kolkata, and
        we export around the world.
      </div>
      
      <div style={{ marginTop: "15px" }}></div>
    </div>
  );
}

export default aboutUs;