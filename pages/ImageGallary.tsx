import React from "react";
import style from "@/styles/ImageGallary.module.css";
import Heading from "@/components/Heading";
import ImgComp from "@/components/ImgComp";
import VerticalImage from "@/components/VerticalImage";

const imgData1 = [
  {
    src: "/image/image 1.jpg",
    alt: "govind hand print akola rajasthan",
  },
  {
    src: "/image/image 2.jpg",
    alt: "govind hand print akola rajasthan",
  },
  {
    src: "/image/image 3.jpg",
    alt: "govind hand print akola rajasthan",
  },
  {
    src: "/image/image 4.jpg",
    alt: "govind hand print akola rajasthan",
  },
  {
    src: "/image/image 5.jpg",
    alt: "govind hand print akola rajasthan",
  },
  {
    src: "/image/image 6.jpg",
    alt: "govind hand print akola rajasthan",
  },
];

const fabric = [
  {
    src: "/image/fabric 1.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 2.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 3.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 4.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 5.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 6.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 7.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 8.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 9.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 10.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 11.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 12.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 13.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
  {
    src: "/image/fabric 14.jpg",
    alt: "govind hand print dabu print akola rajasthan",
  },
];

const bedsheet = [
  {
    src: "/image/bedsheet 1.jpg",
    alt: "govind hand print dabu print bedsheet akola rajasthan",
  },
  {
    src: "/image/bedsheet 2.jpg",
    alt: "govind hand print dabu print bedsheet akola rajasthan",
  },
  {
    src: "/image/bedsheet 3.jpg",
    alt: "govind hand print dabu print bedsheet akola rajasthan",
  },
  {
    src: "/image/bedsheet 4.jpg",
    alt: "govind hand print dabu print bedsheet akola rajasthan",
  },
];

const saree = [
  {
    src: "/image/saree 1.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 2.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 3.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 4.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 5.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 6.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 7.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 8.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 9.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
  {
    src: "/image/saree 10.jpg",
    alt: "govind hand print saree dabu print akola rajasthan",
  },
];

const salwar = [
  {
    src: "/image/salwar 1.jpg",
    alt: "govind hand print salwar suit dabu print akola rajasthan",
  },
  {
    src: "/image/salwar 3.jpg",
    alt: "govind hand print salwar suit dabu print akola rajasthan",
  },
];

function ImageGallary() {
  return (
    <div className={style.contaner}>
      <Heading head="Image Gallay" />
      <div className={style.imgDiv}>
        {imgData1.map((x, i) => {
          return (
            <div key={i}>
              <ImgComp src={x.src} alt={x.alt} />
            </div>
          );
        })}
      </div>

      <div id="runningFabric">
        <Heading head="Running Fabric" />
        <div className={style.imgDiv}>
          {fabric.map((x, i) => {
            return (
              <div key={i}>
                <ImgComp src={x.src} alt={x.alt} />
              </div>
            );
          })}
        </div>
      </div>

      <div id="saree">
        <Heading head="Saree" />
        <div className={style.imgDiv}>
          {saree.map((x, i) => {
            return (
              <div key={i}>
                <VerticalImage src={x.src} alt={x.alt} />
              </div>
            );
          })}
        </div>
      </div>

      <div id="salwarSuit">
        <Heading head="Salwar Suit" />
        <div className={style.imgDiv}>
          {salwar.map((x, i) => {
            return (
              <div key={i}>
                <ImgComp src={x.src} alt={x.alt} />
              </div>
            );
          })}
        </div>
      </div>

      <div id="bedsheet">
        <Heading head="Bedsheet" />
        <div className={style.imgDiv}>
          {bedsheet.map((x, i) => {
            return (
              <div key={i}>
                <ImgComp src={x.src} alt={x.alt} />
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "15px" }}></div>
    </div>
  );
}

export default ImageGallary;
