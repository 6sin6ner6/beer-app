import React from "react";
import { connect } from "react-redux";
import actions from "../duck/actions";
import LogInButton from "../components/styles/LogInButton";
import Input from "../components/styles/Input";
import LogInWrapper from "../components/styles/LogInWrapper";
import CloseButton from "../components/styles/CloseButton";

const LogInPage = ({ logInInvisible, showAddBeerPage }) => {
  return (
    <>
      <LogInWrapper>
        <Input placeholder="Nazwa użytkownika" />
        <Input placeholder="Hasło" />
        <LogInButton onClick={showAddBeerPage}>Zaloguj</LogInButton>
        <CloseButton onClick={logInInvisible}>X</CloseButton>
      </LogInWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return { logInVisible: state.logInVisible, addBeerPage: state.addBeerPage };
};

const mapDispatchToProps = (dispatch) => ({
  logInInvisible: () => dispatch(actions.logInInvisible()),
  showAddBeerPage: () => dispatch(actions.showAddBeerPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
