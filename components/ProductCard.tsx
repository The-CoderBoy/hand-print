import React from "react";
import styled from "styled-components";
import { kadwa } from "@/utils/font";

type Parameters = {
  url: any;
  alt: any;
  cardColor: any;
  textColor: any;
  text: String;
};

const Div = styled.div`
  width: 350px;
  height: 220px;
  position: relative;
  @media (max-width: 700px) {
    width: 335px;
    height: 175px;
  }
`;

const Img = styled.img`
  width: 350px;
  height: 220px;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: 335px;
    height: 175px;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 190px;
  position: absolute;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  @media (max-width: 700px) {
    width: 290px;
    height: 150px;
  }
`;

const P = styled.p`
  margin: auto;
  width: 300px;
  position: absolute;
  text-align: center;
  font-size: 60px;
  line-height: 60px;
  color: ${(props) => props.color};
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

function Product(props: Parameters) {
  return (
    <Div className={kadwa.className}>
      <Img src={props.url} alt={props.alt} />
      <Card color={props.cardColor} />
      <P color={props.textColor}>{props.text}</P>
    </Div>
  );
}

export default Product;
