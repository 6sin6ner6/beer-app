import styled from "styled-components";
import React from "react";

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 40px;
  background-color: black;
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
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

export default Footer;
