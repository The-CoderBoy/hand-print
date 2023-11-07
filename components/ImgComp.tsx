import React from "react";
import Styled from "styled-components";

type ImgData = {
  src: any;
  alt: any;
};

const Img = Styled.img`
    width: 350px;
    height: 220px;
    border-radius: 10px;
    @media (max-width: 700px) {
        width: 335px;
        height: 175px;
      }
`;

function ImgComp(props: ImgData) {
  return (
    <div>
      <Img src={props.src} alt={props.alt} />
    </div>
  );
}

export default ImgComp;
