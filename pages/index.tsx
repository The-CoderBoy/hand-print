import React from "react";
import style from "@/styles/Home.module.css";
import { kadwa, grenze } from "@/utils/font";
import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import ImgComp from "@/components/ImgComp";

const cardData = [
  {
    url: "/image/Dabu saree.jpeg",
    alt: "dabu print saree",
    cardColor: "#1b204481",
    textColor: "#A4AFFF",
    text: "Saree",
  },
  {
    url: "/image/bedsheet.png",
    alt: "dabu print bedsheet",
    cardColor: "#1e77838a",
    textColor: "#1DCDFF",
    text: "Bedsheet",
  },
  {
    url: "/image/slwarsuit.jpg",
    alt: "dabu print slwarsuit",
    cardColor: "#72403db7",
    textColor: "#EA5442",
    text: "Slwar Suit",
  },
];

const workImgData = [
  {
    src: "/image/worlshop1.jpg",
    alt: "govind hand print akola rajasthan",
  },
  {
    src: "/image/workshop2.jpg",
    alt: "govind hand print akola rajasthan",
  },
];

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

        <Heading head="We Dabu Print on Following Products" />

        <div className={style.cardDiv}>
          {cardData.map((x, i) => {
            return (
              <div key={i}>
                <ProductCard
                  url={x.url}
                  alt={x.alt}
                  cardColor={x.cardColor}
                  textColor={x.textColor}
                  text={x.text}
                />
              </div>
            );
          })}
        </div>

        <Heading head="Work Shop" />

        <div className={`${kadwa.className} ${style.workShop}`}>
          Our work shop is located in Akola, Chittorgarh, Rajasthan.
        </div>

        <div className={style.cardDiv}>
          {workImgData.map((x, i) => {
            return (
              <div key={i}>
                <ImgComp src={x.src} alt={x.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default index;
