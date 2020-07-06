import styled from "styled-components";
import React from "react";
import CloseButton from "./CloseButton";
import img from "../../img/beer2.jpg";

const BeerItemWrapper = styled.div`
  height: 80vh;
  width: 60vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: lightgrey;
`;

const TextWrapper = styled.div`
  width: 40%;
  height: 80%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BeerImage = styled.img`
  height: 80%;
`;

const BeerName = styled.h1`
  font-size: 45px;
`;

const BeerType = styled.p`
  font-size: 30px;
  margin-top: 10px;
`;

const BeerDescription = styled.p`
  margin-top: 25px;
  font-size: 22px;
  text-align: justify;
`;

const Close = styled(CloseButton)`
  position: absolute;
  top: 83%;
  right: 2%;
  border: 2px solid white;
`;

const BeerCard = ({ image, name, type, description }) => (
  <BeerItemWrapper>
    <BeerImage src={img} />
    <TextWrapper>
      <BeerName>Kormoran IPA</BeerName>
      <BeerType>India Pale Ale</BeerType>
      <BeerDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quidem,
        error aliquam pariatur, doloribus sint impedit voluptatem reiciendis vel
        quaerat provident itaque. Dolorum aperiam reiciendis quis corrupti?
        Eveniet, deleniti quam? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Culpa quidem, error aliquam pariatur, doloribus sint
        impedit voluptatem reiciendis vel quaerat provident itaque. Dolorum
        aperiam reiciendis quis corrupti? Eveniet, deleniti quam? Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </BeerDescription>
    </TextWrapper>
    <Close>X</Close>
  </BeerItemWrapper>
);

export default BeerCard;
