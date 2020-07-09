import styled from "styled-components";
import React from "react";
import { FaStar } from "react-icons/fa";

const Star1 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 1) return "yellow";
  }};
`;
const Star2 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 2) return "yellow";
  }};
`;
const Star3 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 3) return "yellow";
  }};
`;
const Star4 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 4) return "yellow";
  }};
`;
const Star5 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 5) return "yellow";
  }};
`;

const Stars = ({ rating }) => {
  return (
    <>
      <Star1 rating={rating} />
      <Star2 rating={rating} />
      <Star3 rating={rating} />
      <Star4 rating={rating} />
      <Star5 rating={rating} />
    </>
  );
};

export default Stars;
