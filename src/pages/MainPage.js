import React, { useRef } from "react";
import { MainPageWrapper, Title, Button } from "../components/styles/MainPage";
import { connect } from "react-redux";
import actions from "../duck/actions";

const MainPage = (props) => {
  const myRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetHeight);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <MainPageWrapper ref={myRef}>
      <Title>Piwa wypite i ocenione</Title>
      <Button onClick={executeScroll}>Zobacz piwa</Button>
      <Button onClick={props.logInVisible}>Logowanie</Button>
    </MainPageWrapper>
  );
};

const mapStateToProps = (state) => {
  return { visible: state.visible };
};

const mapDispatchToProps = (dispatch) => ({
  logInVisible: () => dispatch(actions.logInVisible()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
