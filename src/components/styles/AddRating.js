import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import { FaStar } from "react-icons/fa";

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: -45px;
  margin-left: 90px;
  width: 32%;
  cursor: pointer;
`;

const Star1 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.beerRating >= 1) return "yellow";
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
    if (props.beerRating >= 2) return "yellow";
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
    if (props.beerRating >= 3) return "yellow";
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
    if (props.beerRating >= 4) return "yellow";
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
    if (props.beerRating >= 5) return "yellow";
  }};
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;

const Stars = ({ addRating, beerRating }) => {
  return (
    <StarsContainer onClick={(e) => addRating(e.target.parentElement.id)}>
      <Star5 id="5" beerRating={beerRating} />
      <Star4 id="4" beerRating={beerRating} />
      <Star3 id="3" beerRating={beerRating} />
      <Star2 id="2" beerRating={beerRating} />
      <Star1 id="1" beerRating={beerRating} />
    </StarsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addRating: (rating) => dispatch(actions.addRating(rating)),
});

const mapStateToProps = (state) => {
  return {
    beerRating: state.beerRating,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
