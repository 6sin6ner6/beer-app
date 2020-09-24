import styled from "styled-components";
import React from "react";
import { FaStar } from "react-icons/fa";

const Star1 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 1) return "yellow";
  }};
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 20px;
  }
`;
const Star2 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 2) return "yellow";
  }};
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 20px;
  }
`;
const Star3 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 3) return "yellow";
  }};
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 20px;
  }
`;
const Star4 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 4) return "yellow";
  }};
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 20px;
  }
`;
const Star5 = styled(FaStar)`
  font-size: 35px;
  margin-top: 5px;
  color: ${(props) => {
    if (props.rating >= 5) return "yellow";
  }};
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 20px;
  }
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
