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
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;
const Star2 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;
const Star3 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;
const Star4 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;
const Star5 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  &:hover,
  &:hover ~ svg {
    color: yellow;
  }
`;

const Stars = ({ addRating }) => {
  return (
    <StarsContainer onClick={(e) => addRating(e.target.parentElement.id)}>
      <Star5 id="5" />
      <Star4 id="4" />
      <Star3 id="3" />
      <Star2 id="2" />
      <Star1 id="1" />
    </StarsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addRating: (rating) => dispatch(actions.addRating(rating)),
});

export default connect(null, mapDispatchToProps)(Stars);
