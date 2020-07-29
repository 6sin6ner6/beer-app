import styled, { keyframes } from "styled-components";
import React, { useRef } from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import logo from "../../img/logo.png";
import img from "../../img/beer1.jpg";

const PageWrapper = styled.div`
  text-align: center;
  height: 100vh;
  position: relative;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: ${(props) => (props.addBeerPage ? "none" : "flex")};
  align-items: flex-start;
  justify-content: flex-end;
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
    box-shadow: 0 0 10px 0 #d42919 inset, 0 0 10px 4px #d42919;
    color: white;
  }
`;

const MainPageWrapper = ({ logInPageVisible, addBeerPage }) => {
  const myRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetHeight);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <PageWrapper ref={myRef} addBeerPage={addBeerPage}>
      <Logo src={logo} />
      <Button onClick={executeScroll}>Zobacz piwa</Button>
      <Button onClick={logInPageVisible}>Logowanie</Button>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => {
  return { logInVisible: state.logInVisible, addBeerPage: state.addBeerPage };
};

const mapDispatchToProps = (dispatch) => ({
  logInPageVisible: () => dispatch(actions.logInPageVisible()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageWrapper);
