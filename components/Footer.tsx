import React from "react";
import styled from "styled-components";
import { kadwa } from "@/utils/font";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";

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
        </div>
        <div>
          Email:- <br />{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#DDD3A0",
              marginLeft: "15px",
            }}
            href="mailto:testMail@gmail.com"
          >
            testMail@gmail.com
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
        <BsWhatsapp />
        <BsFacebook />
        <BsInstagram />
      </Div2>
    </MainDiv>
  );
}

export default Footer;
