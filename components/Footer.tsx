import React from "react";
import styled from "styled-components";
import { kadwa } from "@/utils/font";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const MainDiv = styled.div`
  background-color: #544600f1;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
`;

const Div1 = styled.div`
  line-height: 25px;
  color: #ddd3a0;
  font-size: 13px;
  width: 350px;
`;

const Div2 = styled.div`
  width: 180px;
  color: #ddd3a0;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  text-align: center;
`;

const Lik = styled(Link)`
  text-decoration: none;
  color: #ddd3a0;
  font-size: 15px;
`;

function Footer() {
  return (
    <MainDiv className={kadwa.className}>
      <Div1>
        <div>
          Contact No.:- <br />{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#DDD3A0",
              marginLeft: "15px",
            }}
            href="tel:+91-9571306863"
          >
            +91-9571306863
          </a>
          ,
          <a
            style={{
              textDecoration: "none",
              color: "#DDD3A0",
              marginLeft: "5px",
            }}
            href="tel:+91-9929173370"
          >
            +91-9929173370
          </a>
        </div>
        <div>
          Email:- <br />{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#DDD3A0",
              marginLeft: "15px",
            }}
            href="mailto:handprintakola@gmail.com"
          >
            handprintakola@gmail.com
          </a>
        </div>
        <div>
          Addres:- <br />{" "}
          <span style={{ marginLeft: "15px" }}>
            Jawahar Nagar, near the middle school in Akola, Chittorgarh,
            Rajasthan, Pin-Code:- 312205
          </span>
        </div>
      </Div1>
      <Div2>
        <a
          style={{ color: "#ddd3a0", height: "65px" }}
          href="https://wa.me/+919571306863"
        >
          <BsWhatsapp />
        </a>
        <a
          style={{ color: "#ddd3a0", height: "65px" }}
          href="https://m.facebook.com/profile.php?id=100054877175179&v=info&funlid=7ysiefpw3kiCcemw"
        >
          <BsFacebook />
        </a>
        <a
          style={{ color: "#ddd3a0", height: "65px" }}
          href="https://instagram.com/govindhandprints?igshid=NTFqd2toNDFmY3Zz"
        >
          <BsInstagram />
        </a>
      </Div2>
      <Div3>
        <Lik href="/ImageGallary">Image Gallary</Lik>
        <Lik href="/education">Education</Lik>
        <Lik href="/Awards">Awards</Lik>
        <Lik href="/Aboutus">About Us</Lik>
        <Lik href="/ContactUs">Contact Us</Lik>
      </Div3>
    </MainDiv>
  );
}

export default Footer;
