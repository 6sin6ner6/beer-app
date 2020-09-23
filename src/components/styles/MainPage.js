import styled, { keyframes } from "styled-components";
import React, { useRef } from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import logo from "../../img/logo.png";
import img from "../../img/beer1.jpg";

const PageWrapper = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: ${(props) => (props.addBeerPage ? "none" : "flex")};
  align-items: flex-start;
  justify-content: flex-end;
  @media (max-width: 575.98px) {
    min-height: 600px;
    background-position: 65% 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
  }
  @media (max-width: 767.98px) and (orientation: landscape) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }
`;

const rotate = keyframes`
 0% {
   transform: rotate(-540deg) scale(0);
   opacity: 0;
 }
 100% {
   transform: rotate(0) scale(1);
   opacity: 1;
 }
`;
const show = keyframes`
 0% {
   transform: translateY(-1000px);
   opacity: 0;
 }
 100% {
   transform: translateY(0);
   opacity: 1;
 }
`;

const Logo = styled.img`
  position: absolute;
  top: 80px;
  left: 0;
  height: 800px;
  animation: ${rotate} 0.8s ease-out both;
  @media (max-width: 575.98px) and (orientation: portrait) {
    height: 300px;
    top: -5%;
    left: 10%;
  }
  @media (max-width: 767.98px) and (orientation: landscape) {
    height: 300px;
    top: 0;
  }
  @media (max-width: 1440px) and (orientation: landscape) {
    height: 750px;
  }
`;

const Button = styled.button`
  display: inline-block;
  border: 3px solid white;
  color: black;
  background-color: white;
  font-size: 35px;
  height: 80px;
  padding: 15px 50px;
  border-radius: 50px;
  margin: 30px 30px;
  cursor: pointer;
  transition: 0.2s linear;
  animation: ${show} 1s 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  &:hover {
    background-color: transparent;
    box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    color: white;
  }
  @media (hover: none) {
    &:hover {
      background-color: white;
      color: black;
      box-shadow: none;
    }
  }
  @media (max-width: 575.98px) {
    font-size: 25px;
    height: 60px;
    margin-top: 40px;
    margin-bottom: -20px;
    padding: 0px 40px;
    line-height: 25px;
  }
  @media (max-width: 767.98px) and (orientation: landscape) {
    font-size: 25px;
    height: 50px;
    margin-top: 40px;
    margin-bottom: -20px;
    padding: 0px 40px;
    line-height: 25px;
  }
`;

const MainPageWrapper = ({ logInVisible, addBeerPage }) => {
  const myRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetHeight);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <PageWrapper ref={myRef} addBeerPage={addBeerPage}>
      <Logo src={logo} />
      <Button onClick={executeScroll}>Zobacz piwa</Button>
      <Button onClick={logInVisible}>Logowanie</Button>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => {
  return { logInVisible: state.logInVisible, addBeerPage: state.addBeerPage };
};

const mapDispatchToProps = (dispatch) => ({
  logInVisible: () => dispatch(actions.logInVisible()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageWrapper);
