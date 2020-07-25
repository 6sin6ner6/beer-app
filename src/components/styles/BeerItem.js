import styled from "styled-components";

const BeerItemWrapper = styled.div`
  text-align: center;
  margin: 0 30px;
`;

const BeerImage = styled.img`
  height: 430px;
  cursor: pointer;
  margin-top: 60px;
`;

const BeerName = styled.h1`
  cursor: default;
`;

const BeerType = styled.p`
  cursor: default;
`;

export { BeerItemWrapper, BeerImage, BeerName, BeerType };
