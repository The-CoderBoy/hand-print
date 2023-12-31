import AwardCard from "@/components/AwardCard";
import React from "react";
import style from "@/styles/Award.module.css";
import Heading from "@/components/Heading";
import { kadwa } from "@/utils/font";
import ImgComp from "@/components/ImgComp";

const awardData = [
  {
    org: "Goverment Of India ( Ministry Of  Textile )",
    date: "10-May-2010",
    dis: "Registration at the office of the development commissioner (handicraft) carpet weaving training cum service centre in Udaipur, Rajasthan, in traditional block printing with the ministry of textile ",
  },

  {
    org: "Lady bamford foundation",
    date: "September-November-2019",
    dis: "Certification for participation and successful completion of the workshop of Project Utpal for natural colour textile printing in Jaipur.",
  },

  {
    org: "Banasthali Vidyapith",
    date: "22-December-2019",
    dis: "Certification for conducting workshops for Akola printing in the department of design",
  },

  {
    org: "District administration, Chittorgarh",
    date: "26-January-2020",
    dis: "award on Republic Day for participation in project Utpal, organised by Lady Bamford Foundation and conducting workshops in Banasthali Vidyapith for natural colour Akola print",
  },

  {
    org: "District Industries & Commerce Center, Udaipur",
    date: "17-February-2023",
    dis: "Certification for participation and successful completion of training programmes on divisional level orientation and awareness programmes on cluster development for hand printing by the Rajasthan government",
  },
  {
    org: "Poornima University",
    date: "12-August-2023",
    dis: "Certificate for work in the field of Indian traditional textiles and for being a part of the Poornima Trends 2023 Annual Fashion Show in Jaipur.",
  },
];

const imgData = [
  {
    src: "/image/award 1.jpg",
    alt: "govind hand print akola rajasthan",
  },
  {
    src: "/image/award.jpg",
    alt: "govind hand print akola rajasthan",
  },
];

function Awards() {
  return (
    <div className={style.contaner}>
      <Heading head="Awards and Certificates" />

      <div className={style.imgDiv}>
        {imgData.map((x, i) => {
          return (
            <div key={i}>
              <ImgComp src={x.src} alt={x.alt} />
            </div>
          );
        })}
      </div>

      <div className={`${kadwa.className} ${style.para}`}>
        Our work and art have been acknowledged by so many organisations over
        the years. This appreciation gives us motivation to do hard work in
        craftsmanship.
      </div>

      {awardData.map((x, i) => {
        return (
          <div key={i}>
            <AwardCard org={x.org} date={x.date} dis={x.dis} />
          </div>
        );
      })}

      <div style={{ marginTop: "15px" }}></div>
    </div>
  );
}

export default Awards;
