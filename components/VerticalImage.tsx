import React from "react";
import styled from "styled-components";

type ImgData = {
  src: any;
  alt: any;
};

const Img = styled.img`
  width: 250px;
  height: 400px;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: 280px;
    height: 400px;
  }
`;

function VerticalImage(props: ImgData) {
  return (
    <div>
      <Img src={props.src} alt={props.alt} />
    </div>
  );
}

export default VerticalImage;
