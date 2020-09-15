import styled from "styled-components";

const BeerItemWrapper = styled.div`
  text-align: center;
  margin: 0 30px;
`;

const BeerImage = styled.img`
  height: 430px;
  cursor: pointer;
  margin-top: 60px;
  @media (max-width: 767.98px) and (orientation: landscape) {
    height: 250px;
  }
`;

const BeerName = styled.h1`
  cursor: default;
  @media (max-width: 767.98px) and (orientation: landscape) {
    font-size: 20px;
  }
`;

const BeerType = styled.p`
  cursor: default;
`;

export { BeerItemWrapper, BeerImage, BeerName, BeerType };
