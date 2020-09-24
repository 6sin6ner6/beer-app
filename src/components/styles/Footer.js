import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";

const FooterWrapper = styled.div`
  display: ${(props) => (props.addBeerPage ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 40px;
  background-color: black;
  color: white;
  width: 100%;
  @media (max-width: 575.98px) {
    width: 100%;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    width: 100%;
  }
`;

const Footer = ({ addBeerPage }) => {
  return (
    <FooterWrapper addBeerPage={addBeerPage}>
      <div>Page made by Bartzabel</div>
    </FooterWrapper>
  );
};

const mapStateToProps = (state) => {
  return { addBeerPage: state.addBeerPage };
};

export default connect(mapStateToProps)(Footer);
