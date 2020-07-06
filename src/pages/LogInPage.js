import React from "react";
import { connect } from "react-redux";
import LogInButton from "../components/styles/LogInButton";
import Input from "../components/styles/Input";
import LogInWrapper from "../components/styles/LogInWrapper";
import CloseButton from "../components/styles/CloseButton";

const LogInPage = (props) => {
  return (
    <>
      <LogInWrapper>
        <Input placeholder="Nazwa użytkownika" />
        <Input placeholder="Hasło" />
        <LogInButton>Zaloguj</LogInButton>
        <CloseButton onClick={props.logInInvisible}>X</CloseButton>
      </LogInWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return { visible: state.visible };
};

const mapDispatchToProps = (dispatch) => ({
  logInInvisible: () => dispatch({ type: "LOGIN_INVISIBLE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
