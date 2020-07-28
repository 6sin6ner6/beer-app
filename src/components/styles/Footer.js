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
`;

const Footer = ({ addBeerPage }) => {
  return (
    <FooterWrapper addBeerPage={addBeerPage}>
      <div>
        Page made by Bartzabel | Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </FooterWrapper>
  );
};

const mapStateToProps = (state) => {
  return { addBeerPage: state.addBeerPage };
};

export default connect(mapStateToProps)(Footer);
