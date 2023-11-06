import React from "react";
import style from "@/styles/Home.module.css";
import { kadwa, grenze } from "@/utils/font";

function index() {
  return (
    <>
      <div className="container">
        <div className={style.logoDiv}>
          <img
            src="/image/Govind Hand Print.png"
            alt="Govind Hand Print"
            width="200px"
            height="150px"
            style={{ marginTop: "15px" }}
          />
        </div>

        <div className={style.perentDiv}>
          <img
            src="/image/banner900x400.jpg"
            alt="Govind Hand Print Banner"
            className={style.img}
          />
          <div className={style.card}>
            <div className={`${kadwa.className} ${style.divHead}`}>
              <span className={style.p}>Three generation dedicated to</span>
              <br />
              <span className={style.headP}>Dabu Print</span>
            </div>
          </div>
        </div>

        <div className={`${grenze.className} ${style.intro}`}>
          We specialize in the intricate craft of Dabu printing, a traditional
          art that has been passed down through three generations within our
          family. Our reputation is built on the foundation of exceptional
          product quality and a wide range of diverse and intricate designs.
        </div>
      </div>
    </>
  );
}

export default index;
