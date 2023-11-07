import React from "react";
import styled from "styled-components";
import { inter } from "@/utils/font";

type HeadText = {
  head: String;
};

const Div = styled.div`
  margin: auto;
  width: 80%;
  @media (max-width: 1170px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const P = styled.p`
  color: #907b0f;
  font-weight: bold;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 0px;
  margin-left: 15px;
  @media (max-width: 700px) {
    margin-left: 0px;
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

const Line = styled.div`
  margin: auto;
  margin-top: 5px;
  width: 100%;
  height: 5px;
  background-color: #907b0f65;
  border-radius: 5px;
`;

function Heading(props: HeadText) {
  return (
    <Div className={inter.className}>
      <P>{props.head}</P>
      <Line />
    </Div>
  );
}

export default Heading;
