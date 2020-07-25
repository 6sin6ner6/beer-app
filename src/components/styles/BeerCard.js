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

const BeerCard = ({ beerCard, closeBeerCard, beerCardContent }) => (
  <BeerItemWrapper beerCard={beerCard}>
    {beerCardContent.map((beer) => (
      <>
        <BeerImage src={`data:image/jpeg;base64,${beer.image.buffer}`} />
        <TextWrapper>
          <BeerName>{beer.beerName}</BeerName>
          <BeerType>{beer.beerType}</BeerType>
          <BeerDescription>{beer.beerDescription}</BeerDescription>
        </TextWrapper>
        <Close onClick={closeBeerCard}>X</Close>
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
