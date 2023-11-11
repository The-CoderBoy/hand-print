import React from "react";
import style from "@/styles/Education.module.css";
import Heading from "@/components/Heading";
import { kadwa } from "@/utils/font";
import ImgComp from "@/components/ImgComp";
import Link from "next/link";

interface ImgData {
  src: String;
  alt: String;
}

const imgData: ImgData[] = [
  {
    src: "/image/WhatsApp Image1.jpg",
    alt: "govind hand print work shop akola",
  },
  {
    src: "/image/WhatsApp Image2.jpg",
    alt: "govind hand print work shop akola",
  },
  {
    src: "/image/WhatsApp Image3.jpg",
    alt: "govind hand print work shop akola",
  },
  {
    src: "/image/WhatsApp Image4.jpg",
    alt: "govind hand print work shop akola",
  },
];

const imgData1: ImgData[] = [
  {
    src: "/image/WhatsApp Image 11.jpg",
    alt: "govind hand print work shop akola",
  },
  {
    src: "/image/WhatsApp Image 12.jpg",
    alt: "govind hand print work shop akola",
  },
  {
    src: "/image/WhatsApp Image 13.jpg",
    alt: "govind hand print work shop akola",
  },
  {
    src: "/image/WhatsApp Image 14.jpg",
    alt: "govind hand print work shop akola",
  },
];

function education() {
  return (
    <div className={style.contaner}>
      <Heading head="Lets know about 'Dabu Print'" />
      <div className={`${kadwa.className} ${style.firstPara}`}>
        Dadu print started in the 6th century AD. This ancient art is practiced
        in Rajasthan, India. Dabu is the process of printing onto fabric using a
        wood printing block with a mud paste that acts as a resist. This mud
        paste is made by mixing black clay, wheat flour, gum, and lime water.
        the wood block soak into the wet mud and press on to the fabric to
        create a design impression. Before the mud dries, we spread sawdust on
        the fabric, which sticks to the mud. Now fabric dyes three to four times
        with the natural indigo colour. After the dying process, the fabric is
        left in the sun to dry. After this, the fabric is washed and cleaned,
        and it is ready for shipping.
      </div>

      <div className={style.imgDiv}>
        {imgData.map((x, i) => {
          return (
            <div key={i}>
              <ImgComp src={x.src} alt={x.alt} />
            </div>
          );
        })}
      </div>

      <Heading head="We teach the art of 'Dabu Print'" />

      <div className={`${kadwa.className} ${style.firstPara}`}>
        We have taught this art to so many people around the world. We spread
        knowledge to passionate people who can keep this art alive by teaching
        it.We periodically conduct workshops for teaching dadu print to people
        around the world. To book a slot in the work shop or for any query,
        please feel free to{" "}
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "700",
            color: "#897402",
          }}
          href="/ContactUs"
        >
          Contact Us
        </Link>
      </div>

      <div className={style.imgDiv}>
        {imgData1.map((x, i) => {
          return (
            <div key={i}>
              <ImgComp src={x.src} alt={x.alt} />
            </div>
          );
        })}
      </div>

      <div
        style={{
          width: "100%",
          margin: "auto",
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <Link href="/ContactUs">
          <button className={`${kadwa.className} ${style.btn}`}>
            Contact Us to Learn
          </button>
        </Link>
      </div>
    </div>
  );
}

export default education;
