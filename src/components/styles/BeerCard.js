import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import CloseButton from "./CloseButton";

const BeerItemWrapper = styled.div`
  height: 80vh;
  width: 60vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.beerCard ? "flex" : "none")};
  align-items: center;
  justify-content: space-around;
  background-color: rgb(30, 30, 30);
  color: white;
  @media (max-width: 575.98px) {
    min-width: 85%;
    height: 500px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    height: 90vh;
  }
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
  @media (max-width: 575.98px) {
    min-width: 85%;
    min-height: 85%;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    width: 80%;
    height: 90%;
  }
`;

const BeerImage = styled.img`
  height: 80%;
  @media (max-width: 575.98px) {
    display: none;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    display: none;
  }
  @media (max-width: 1440px) {
    height: 75%;
  }
`;

const BeerName = styled.h1`
  font-size: 45px;
  @media (max-width: 575.98px) {
    font-size: 30px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 22px;
    margin-top: 10px;
  }
  @media (max-width: 1440px) {
    font-size: 30px;
  }
`;

const BeerType = styled.p`
  font-size: 30px;
  margin-top: 10px;
  @media (max-width: 575.98px) {
    font-size: 20px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 13px;
    margin-top: 5px;
  }
  @media (max-width: 1440px) {
    font-size: 20px;
  }
`;

const BeerDescription = styled.p`
  margin-top: 25px;
  font-size: 22px;
  text-align: justify;
  @media (max-width: 575.98px) {
    font-size: 13px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 11px;
    margin-top: 20px;
  }
  @media (max-width: 1440px) and (min-device-aspect-ratio: 1/1) {
    font-size: 16px;
  }
`;

const Close = styled(CloseButton)`
  position: absolute;
  top: 83%;
  right: 2%;
  border: 2px solid white;
  outline: none;
  @media (max-width: 575.98px) {
    top: 77%;
    right: 5%;
    height: 45px;
    width: 45px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    height: 40px;
    width: 40px;
    top: -10%;
    right: 5%;
    font-size: 25px;
  }
`;

const BeerCard = ({ beerCard, closeBeerCard, beerCardContent }) => (
  <BeerItemWrapper beerCard={beerCard}>
    {beerCardContent.map((beer) => (
      <>
        <BeerImage src={`data:image/jpeg;base64,${beer.image.buffer}`} />
        <TextWrapper>
          <BeerName>{beer.beerName}</BeerName>
          <BeerType>{beer.beerType}</BeerType>
          <BeerDescription>{beer.beerDescription}</BeerDescription>
          <Close onClick={closeBeerCard}>X</Close>
        </TextWrapper>
      </>
    ))}
  </BeerItemWrapper>
);

const mapStateToProps = (state) => {
  return { beerCard: state.beerCard, beerCardContent: state.beerCardContent };
};
const mapDispatchToProps = (dispatch) => ({
  closeBeerCard: () => dispatch(actions.closeBeerCard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard);
