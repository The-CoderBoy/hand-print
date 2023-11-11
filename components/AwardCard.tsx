import React from "react";
import styled from "styled-components";
import { almendra } from "@/utils/font";

type Data = {
  org: String;
  date: String;
  dis: String;
};

const MainDiv = styled.div`
  margin: auto;
  margin-top: 15px;
  background-color: white;
  width: 60%;
  padding: 20px;
  border: solid 0.5px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.603);
  @media (max-width: 700px) {
    width: 85%;
  }
`;

const Card = styled.div`
  border: solid 3px #1389bbb2;
  padding: 15px;
  color: #006b8c;
  font-size: 20px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

function AwardCard(props: Data) {
  return (
    <MainDiv>
      <Card className={almendra.className}>
        <div>
          Organization :-
          <span style={{ fontWeight: "700" }}> {props.org}</span>
        </div>
        <div style={{ marginTop: "10px" }}>Date :- {props.date}</div>
        <div style={{ marginTop: "10px" }}>Description :- {props.dis}</div>
      </Card>
    </MainDiv>
  );
}

export default AwardCard;
