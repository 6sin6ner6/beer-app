import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import { FaStar } from "react-icons/fa";

const StarsContainer = styled.div`
  position: absolute;
  top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: -45px;
  margin-left: 100px;
  width: 32%;
  cursor: pointer;
  @media (max-width: 575.98px) {
    top: 60%;
    left: -10%;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    left: 25%;
  }
`;

const Star1 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.beerrating >= 1) return "yellow";
  }};
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;
const Star2 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.beerrating >= 2) return "yellow";
  }};
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;
const Star3 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.beerrating >= 3) return "yellow";
  }};
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;
const Star4 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.beerrating >= 4) return "yellow";
  }};
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;
const Star5 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.beerrating >= 5) return "yellow";
  }};
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;

const Stars = ({ addRating, beerrating }) => {
  return (
    <StarsContainer onClick={(e) => addRating(e.target.parentElement.id)}>
      <Star5 id="5" beerrating={beerrating} />
      <Star4 id="4" beerrating={beerrating} />
      <Star3 id="3" beerrating={beerrating} />
      <Star2 id="2" beerrating={beerrating} />
      <Star1 id="1" beerrating={beerrating} />
    </StarsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addRating: (rating) => dispatch(actions.addRating(rating)),
});

const mapStateToProps = (state) => {
  return {
    beerrating: state.beerRating,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
