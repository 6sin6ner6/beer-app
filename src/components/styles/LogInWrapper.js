import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import Input from "./Input";
import LogInButton from "./LogInButton";
import CloseButton from "./CloseButton";

const PageWrapper = styled.form`
  height: 45vh;
  width: 35%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(30, 30, 30);
`;

const LogInWrapper = ({ logInInvisible, showAddBeerPage }) => {
  return (
    <>
      <PageWrapper>
        <Input placeholder="Nazwa użytkownika" />
        <Input placeholder="Hasło" />
        <LogInButton onClick={showAddBeerPage}>Zaloguj</LogInButton>
        <CloseButton onClick={logInInvisible}>X</CloseButton>
      </PageWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return { logInVisible: state.logInVisible };
};

const mapDispatchToProps = (dispatch) => ({
  logInInvisible: () => dispatch(actions.logInInvisible()),
  showAddBeerPage: () => dispatch(actions.showAddBeerPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInWrapper);
